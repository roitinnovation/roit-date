import { expect } from 'chai';
import { describe, it } from 'mocha';
import { formatDate } from '../../src';
import { formatComponentDate } from '../../src/date/DateFormat';

describe('DateFormat', () => {
    describe('formatDate()', () => {
      it('Should be able to format dd/mm/yyyy to ISO format', () => {
         const result = formatDate('12/01/2021')

         const expected = new Date('2021-01-12 03:00').toISOString()

         expect(result).to.be.deep.equal(expected)
      })

      it('Should be able to format dd/mm/yyyy HH:mm to ISO format', () => {
         const result = formatDate('12/01/2021 13:00')

         const expected = new Date('2021-01-12 16:00').toISOString()

         expect(result).to.be.deep.equal(expected)
      })

         it('Should be able to format yyyy/mm/dd to ISO format', () => {
            const result = formatDate('2021/01/12')
 
            const expected = new Date('2021-01-12 03:00').toISOString()
 
            expect(result).to.be.deep.equal(expected)
         })

         it('Should be able to format yyyy/mm/dd HH:mm to ISO format', () => {
            const result = formatDate('2021/01/12 13:00')
   
            const expected = new Date('2021-01-12 16:00').toISOString()
   
            expect(result).to.be.deep.equal(expected)
         })

         it('Should be able to format yyyy-mm-dd to ISO format', () => {
            const result = formatDate('2021-01-12')
 
            const expected = new Date('2021-01-12 03:00').toISOString()
 
            expect(result).to.be.deep.equal(expected)
         })

         it('Should be able to format yyyy-mm-dd HH:mm to ISO format', () => {
            const result = formatDate('2021-01-12 03:00')
 
            const expected = new Date('2021-01-12 06:00').toISOString()
 
            expect(result).to.be.deep.equal(expected)
         })

         it('Should return same input date if already is in ISO format with timezone', () => {
            const result = formatDate('2021-01-12T03:00:00.000Z')

            const expected = new Date('2021-01-12 00:00').toISOString()

            expect(result).to.be.deep.equal(expected)
         })

         it ('Should return the correct date', () => {
            const result = formatComponentDate('Thu Mar 18 2021 21:27:53 GMT-0300 (Horário Padrão de Brasília)')

            const expected = new Date('2021-03-18 03:00').toISOString()

            expect(result).to.be.deep.equal(expected)
         })

         it ('Should return null because date is invalid', () => {
            const result = formatComponentDate('Thu Aleatorio 18 2021 21:27:53 GMT-0300 (Horário Padrão de Brasília)')

            const expected = null

            expect(result).to.be.deep.equal(expected)
         })
    })
})