import * as yup from 'yup'

export const nationalCodeValidation = yup.string().test('custom-validation', 'فرمت کد ملی معتبر نیست', (value) => {
    //remove '-' dash from the string !!
    let code = value.replace(/-/g, '')

    if (code.length !== 10) {
        return false
    }

    // Check if all of the numbers are the same
    if (
        code === '0000000000' ||
        code === '1111111111' ||
        code === '2222222222' ||
        code === '3333333333' ||
        code === '4444444444' ||
        code === '5555555555' ||
        code === '6666666666' ||
        code === '7777777777' ||
        code === '8888888888' ||
        code === '9999999999'
    ) {
        return false
    }

    // STEP 00 : if nationalId.length==8 add two zero on the left
    if (code.length < 10) {
        const zeroNeeded = 10 - code.length

        let zeroString = ''
        if (zeroNeeded === 2) {
            zeroString = '00'
        } else {
            zeroString = '0'
        }

        code = zeroString.concat(code)
    }

    // STEP 1: Sum all numbers
    let sum = 0
    for (let i = 0; i < 9; i++) {
        sum += +code.charAt(i) * (10 - i)
    }

    // STEP 2: MOD ON 11
    const mod = sum % 11

    // STEP 3: Check with 2
    let finalValue
    if (mod >= 2) {
        finalValue = 11 - mod
    } else {
        finalValue = mod
    }

    // STEP 4: Final Step check with control value
    if (finalValue === +code.charAt(9)) {
        return true
    }
    return false
})

export const phoneNumberValidation = yup.string().matches(/^09\d{9}$/, 'لطفا فرمت شماره تلفن را درست وارد کنید')
