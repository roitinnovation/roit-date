import { describe, it } from 'mocha';
import { expect } from "chai"

import { formatCompetence, showDateToUser } from "../../src"

describe('DateFormat', () => {
    describe('formatCompetence()', () => {
        it('Should be able to parse a ISO format to MM/yyyy', () => {
            const result = formatCompetence('2021-02-01T01:00:00.000Z')

            const expected = '01/2021'

            expect(result).to.be.deep.equal(expected)
        })
    })

    describe('showDateToUser()', () => {
        it('Should be able to parse a ISO format to dd/MM/yyyy', () => {
            const result = showDateToUser('2021-01-12T01:00:00.000Z')

            const expected = '11/01/2021'

            expect(result).to.be.deep.equal(expected)
        })

        it('Should be able to parse a ISO format to dd/MM/yyyy HH:mm', () => {
            const result = showDateToUser('2021-01-12T01:00:00.000Z', { hours: true })

            const expected = '11/01/2021 22:00'

            expect(result).to.be.deep.equal(expected)
        })

        it('Should be able to parse a dd/MM/yyyy format to dd/MM/yyyy HH:mm', () => {
            const result = showDateToUser('2021-01-12', { hours: true })

            const expected = '11/01/2021 21:00'

            expect(result).to.be.deep.equal(expected)
        })
    })
})