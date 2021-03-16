import { describe, it } from 'mocha';
import { expect } from "chai"

import { FormatToUser } from "../../src"

describe('DateFormat', () => {
    let sut = FormatToUser.getInstance()

    describe('formatCompetence()', () => {
        it('Should be able to parse a ISO format to MM/yyyy', () => {
            const result = sut.formatCompetence('2021-01-12T06:00:00.000Z')

            const expected = '01/2021'

            expect(result).to.be.deep.equal(expected)
        })
    })
})