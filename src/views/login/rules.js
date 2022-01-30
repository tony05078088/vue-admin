export const validatePassword = () => {
    return (rule, value, callback) => {
        if (value.length < 6) {
            callback(new Error('密碼不可少於6位'));
        } else {
            callback();
        }
    };
};
