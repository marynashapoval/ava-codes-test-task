import { KeyValue } from "./keyValue";

export function generateQuery(baseUrl: string, params: KeyValue[]) {
    let resultUrl = baseUrl;
    let paramsQuery = "";
    params.forEach(param => {
        if (param.value != null && param.value != undefined && param.value.toString() != "") {
            if (paramsQuery.length == 0) {
                paramsQuery += "?"
            }
            if (paramsQuery.length > 1) {
                paramsQuery += "&"
            }

            paramsQuery += param.key + "=" + param.value
        }
    });

    return resultUrl + paramsQuery;
}