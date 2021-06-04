export const maskCPF = (cpf) => {
    if (!cpf) return '';
    if (cpf.length < 3) return cpf;
    let masked = `${cpf.substring(-1, 3)}.${cpf.substring(3, 6)}`;
    if (cpf.length > 5) {
        masked += `.${cpf.substring(6, 9)}`;
    }
    if (cpf.length > 8) {
        masked += `-${cpf.substring(9, 11)}`;
    }
    return masked;
};

export const validateCPF = (cpf) => {
    if (!cpf) return false;
    if (cpf.length !== 11 ||
        cpf === "00000000000" ||
        cpf === "11111111111" ||
        cpf === "22222222222" ||
        cpf === "33333333333" ||
        cpf === "44444444444" ||
        cpf === "55555555555" ||
        cpf === "66666666666" ||
        cpf === "77777777777" ||
        cpf === "88888888888" ||
        cpf === "99999999999")
        return false;
    let add = 0;
    let i;
    for (i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i), 10) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11)
        rev = 0;
    if (rev !== parseInt(cpf.charAt(9), 10))
        return false;
    add = 0;
    for (i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i), 10) * (11 - i);
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11)
        rev = 0;
    if (rev !== parseInt(cpf.charAt(10), 10))
        return false;
    return true;
}

export const unmaskCPF = (cpf) => {
    if (!cpf) return '';
    return cpf.replace(/[^0-9]/gi, '').substring(0, 11);
};