import pino from 'pino'

let options = {}

if (process.env.LOGTAIL_SOURCE_TOKEN) {
    options = {
        transport: {
            target: '@logtail/pino',
            options: { sourceToken: process.env.LOGTAIL_SOURCE_TOKEN }
        }
    }
} else {
    options = {
        transport: {
            target: 'pino-pretty',
            options: {
                colorize: true
            }
        }
    }
}

export const logger = pino(options)
