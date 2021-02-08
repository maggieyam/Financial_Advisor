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
    calculateRecData(portfolio, outflow, inflow, recommendations);
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

const calculateRecData = (portfolio, outflow, inflow, recommendations) => {
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