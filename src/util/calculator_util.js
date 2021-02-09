export const calculateTotalAmount = (portfolio) => {
    let total = 0;
    portfolio.map(assetValue => total += assetValue);
    return total;
}

export const calculateNewPortfolio = (preference, totalAmount) => {
    const portfolio = [];
    preference.map(percentage => {
        let amount = totalAmount * percentage / 100;
        portfolio.push(amount);
    })
    return portfolio;
}

export const calculateDiff = (portfolio, preference) => {
    const diff = [];
    for (let i = 0; i < portfolio.length; i++) {
        diff.push(preference[i] - portfolio[i]);
    }
    return diff;
}

export const calculateRec = (portfolio) => {
    const recommendations = {};
    const outflow = []; 
    const inflow = [];  
    splitAssets(portfolio, outflow, inflow, recommendations);  

    if (!outflow.length || !inflow.length) {
        console.log('You have all transactions with the same sign!!!');
        return {};
    }

    const count = outflow.length;
    switch (count) {
        case 1:
            oneToMany(outflow[0], inflow, recommendations, portfolio);
            return recommendations;
        case 2:
            if (removeOnePair(outflow, inflow, recommendations, portfolio)) {
                oneToMany(outflow[0], inflow, recommendations, portfolio);
            } else {
                manyToMany(portfolio, outflow, inflow, recommendations);
            }
            return recommendations;
        case 3:
            if (removeOnePair(inflow, outflow)) {
                manyToOne(inflow[0], outflow, recommendations, portfolio);
            } else {
                manyToMany(portfolio, outflow, inflow, recommendations);
            }
            return recommendations;
        case 4:
            manyToOne(inflow[0], outflow, recommendations, portfolio);
            return recommendations
        default:
            break;
    }
    return recommendations;
}

const splitAssets = (portfolio, outflow, inflow, recommendations) => {
    portfolio.map((asset, idx) => {
        if (asset < 0) {
            outflow.push(idx);
            recommendations[idx] = [];
        } else if (asset > 0) {
            inflow.push(idx);
        }
    })
}

const oneToMany = (one, many, recommendations, portfolio) => {
    recommendations[one] = [];
    many.map(asset => {
        recommendations[one].push({[asset]: portfolio[asset]});
    })
}

const manyToOne = (one, many, recommendations, portfolio) => {
    many.map(asset => {
        recommendations[asset] = [{[one]: Math.abs(portfolio[asset])}]
    })
}

const removeOnePair = (outflow, inflow, recommendations, portfolio) => {
    for (let i = 0; i < outflow.length; i++) {
        let idxO = outflow[i];
        for (let j = 0; j < inflow.length; j++) {
            let idxI = inflow[j];
            if (portfolio[idxO] + portfolio[idxI] === 0) {
                recommendations[idxO] = [{idxI: portfolio[idxI]}];
                outflow.splice(i, 1);
                inflow.splice(j, 1);
                return true;
            }
        }
    }
    return false
}

const manyToMany = (portfolio, outflow, inflow, recommendations) => {
    let negative;
    let positive = portfolio[inflow[0]];

    outflow.map(idx => {
        negative = portfolio[idx];
        while (negative < 0) {
            if (!inflow.length || positive < 0) break;
            const amount = Math.min(positive, Math.abs(negative));           
            recommendations[idx].push({[inflow[0]]: amount});
            negative += amount;

            if (positive > amount) {
                positive -= amount;
            } else {
                inflow.shift();
                if (inflow.length) positive = portfolio[inflow[0]];
            }
        }
    })
}