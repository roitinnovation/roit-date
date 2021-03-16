import { describe, it } from 'mocha';
import { expect } from "chai"

import { formatCompetence, showDateToUser } from "../../src"

describe('DateFormat', () => {
    describe('formatCompetence()', () => {
        it('Should be able to parse a ISO format to MM/yyyy', () => {
            const result = formatCompetence('2021-01-12T06:00:00.000Z')

            const expected = '01/2021'

            expect(result).to.be.deep.equal(expected)
        })
    })

    describe('showDateToUser()', () => {
        it('Should be able to parse a ISO format to dd/MM/yyyy', () => {
            const result = showDateToUser('2021-01-12T06:00:00.000Z')

            const expected = '12/01/2021'

            expect(result).to.be.deep.equal(expected)
        })
    })
})