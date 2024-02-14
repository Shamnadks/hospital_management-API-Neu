const crypto = require('crypto');
const fs = require('fs')
export class CryptoUtil {
    constructor() {

    }

    createCipher(config) {
        return new Promise((resolve, reject) => {
            crypto.scrypt(config.password, config.salt, config.keyLen, (err, key) => {
                if (err) {
                    return reject(err)
                }
                let iv = crypto.randomBytes(config.ivLen);
                const cipher = crypto.createCipheriv(config.algorithm, key, iv, config.options);
                if (config.inputType == 'text' || config.inputType == 'buffer') {
                    try {
                        let encrypted = cipher.update(config.input, config.inputEncoding, config.outputEncoding);
                        encrypted += cipher.final(config.outputEncoding);
                        return resolve({
                            iv: iv.toString('hex'),
                            data: encrypted,
                            status: 'success'
                        })
                    } catch (err) {
                        return reject(err)
                    }
                }
                else if (config.inputType == 'file') {
                    try {
                        const input = fs.readFileSync(config.input);
                        const output = fs.createWriteStream(config.destination);
                        let encrypted = cipher.update(input, config.inputEncoding, config.outputEncoding);
                        encrypted += cipher.final(config.outputEncoding);
                        output.write(encrypted);
                        return resolve({
                            iv: iv.toString('hex'),
                            data: encrypted,
                            status: 'success'
                        })
                    } catch (err) {
                        return reject(err)
                    }
                }
            });
        })

    }

    createDecipher(config) {

        return new Promise((resolve, reject) => {
            try {
                crypto.scrypt(config.password, config.salt, config.keyLen, (err, key) => {
                    if (err) {
                        return reject(err)
                    }
                    const decipher = crypto.createDecipheriv(config.algorithm, key, Buffer.from(config.initializationVector, 'hex'),config.options);

                    if (config.inputType == 'text' ) {
                        try {
                            var dec = decipher.update(config.input, config.inputEncoding, config.outputEncoding)
                            dec += decipher.final(config.outputEncoding)
                            return resolve({
                                data: dec
                            })
                        } catch (err) {
                            return reject(err)
                        }
                    }
                    else if (config.inputType == 'file') {
                        try {
                            const input = fs.readFileSync(config.input, 'utf8');
                            const output = fs.createWriteStream(config.destination);
                            var dec = decipher.update(input, config.inputEncoding, config.outputEncoding)
                            dec += decipher.final(config.outputEncoding)
                            output.write(dec);
                            return resolve({
                                data: dec,
                                status: 'success'
                            })
                        } catch (err) {
                            return reject(err)
                        }
                    }
                    else if (config.inputType == 'buffer') {
                        try {
                            let data = config.input.toString();
                            let dec = decipher.update(data, config.inputEncoding, config.outputEncoding);
                            dec += decipher.final(config.outputEncoding);
                            return resolve({
                                data: dec,
                                status: 'success'
                            })
                        } catch (err) {
                            return reject(err)
                        }
                    }
                });

            }
            catch (err) {
                return reject(err);
            }
        })
    }

    createHmac(config) {
        return new Promise((resolve, reject) => {
            try {
                let input;
                let output;
                if (config.inputType == 'text' || config.inputType == 'buffer') {
                    input = config.input;
                }
                else if (config.inputType == 'file') {
                    input = fs.readFileSync(config.input, 'utf8');
                    output = fs.createWriteStream(config.destination);
                }
                const hmac = crypto.createHmac(config.hash, config.password, config.options);
                hmac.on('readable', () => {
                    const data = hmac.read();
                    if (data) {
                        if (config.inputType == 'file')
                            output.write(data.toString(config.inputEncoding));
                        return resolve(data.toString(config.inputEncoding))
                    }
                });
                hmac.write(input);
                hmac.end();
            }
            catch (err) {
                return reject(err);
            }
        })
    }

}