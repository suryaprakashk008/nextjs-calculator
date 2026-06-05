"use server"

export async function addnumbers(valuex, valuey) {
    return Number(valuex) + Number(valuey);
}

export async function subnumbers(valuex, valuey) {
    return Number(valuex) - Number(valuey);
}

export async function multiplynumbers(valuex, valuey) {
    return Number(valuex) * Number(valuey);
}

export async function dividnumbers(valuex, valuey) {
    return Number(valuex) / Number(valuey);
}

export async function clearresult() {
    return "";
}

export async function calculatenumbers(result) {
    try {
        let err ="";
        if(result === "^" || result === "+" || result === "-" || result === "*" || result === "*" || result === "%" || result=="Error"){
         //err = "Error";
         return "";

        }
        let str = result;
        if (str.includes("^")) {

             result = result.replaceAll("^","**");

        
        }
        let ans = (eval(result).toString());

        if (ans == "Infinity") {
            return true;
        }

        return ans;


    } catch {
        return "Error";
    }

}

