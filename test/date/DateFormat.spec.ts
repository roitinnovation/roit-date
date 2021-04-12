import { expect } from 'chai';
import { describe, it } from 'mocha';
import { formatDate, diffDays } from '../../src';
import { formatComponentDate, retrieveDate } from '../../src/date/DateFormat';

describe('DateFormat', () => {
   it('Should be able to format dd/mm/yyyy to ISO format', () => {
      const formatDateResult = formatDate('12/01/2021')
      const retrieveDateResult = retrieveDate(formatDateResult as string)

      const formatDateExpected = '2021-01-12T03:00:00.000Z'
      const retrieveDateExpected = '2021-01-12T00:00:00.000Z'

      expect(formatDateResult).to.be.deep.equal(formatDateExpected)
      expect(retrieveDateResult).to.be.deep.equal(retrieveDateExpected)
   })

   it('Should be able to format dd/mm/yyyy HH:mm to ISO format', () => {
      const formatDateResult = formatDate('12/01/2021 13:00')
      const retrieveDateResult = retrieveDate(formatDateResult as string)

      const formatDateExpected = '2021-01-12T16:00:00.000Z'
      const retrieveDateExpected = '2021-01-12T13:00:00.000Z'

      expect(formatDateResult).to.be.deep.equal(formatDateExpected)
      expect(retrieveDateResult).to.be.deep.equal(retrieveDateExpected)
   })

   it('Should be able to format yyyy/mm/dd to ISO format', () => {
      const formatDateResult = formatDate('2021/01/12')
      const retrieveDateResult = retrieveDate(formatDateResult as string)

      const formatDateExpected = '2021-01-12T03:00:00.000Z'
      const retrieveDateExpected = '2021-01-12T00:00:00.000Z'

      expect(formatDateResult).to.be.deep.equal(formatDateExpected)
      expect(retrieveDateResult).to.be.deep.equal(retrieveDateExpected)
   })

   it('Should be able to format yyyy/mm/dd HH:mm to ISO format', () => {
      const formatDateResult = formatDate('2021/01/12 13:00')
      const retrieveDateResult = retrieveDate(formatDateResult as string)

      const formatDateExpected = '2021-01-12T16:00:00.000Z'
      const retrieveDateExpected = '2021-01-12T13:00:00.000Z'

      expect(formatDateResult).to.be.deep.equal(formatDateExpected)
      expect(retrieveDateResult).to.be.deep.equal(retrieveDateExpected)
   })

   it('Should be able to format yyyy-mm-dd to ISO format', () => {
      const formatDateResult = formatDate('2021-01-12')
      const retrieveDateResult = retrieveDate(formatDateResult as string)

      const formatDateExpected = '2021-01-12T03:00:00.000Z'
      const retrieveDateExpected = '2021-01-12T00:00:00.000Z'

      expect(formatDateResult).to.be.deep.equal(formatDateExpected)
      expect(retrieveDateResult).to.be.deep.equal(retrieveDateExpected)
   })

   it('Should be able to format yyyy-mm-dd HH:mm to ISO format', () => {
      const formatDateResult = formatDate('2021-01-12')
      const retrieveDateResult = retrieveDate(formatDateResult as string)

      const formatDateExpected = '2021-01-12T03:00:00.000Z'
      const retrieveDateExpected = '2021-01-12T00:00:00.000Z'

      expect(formatDateResult).to.be.deep.equal(formatDateExpected)
      expect(retrieveDateResult).to.be.deep.equal(retrieveDateExpected)
   })

   it('Should be able to format yyyy-mm-ddTHH:mm:ssZ to ISO format', () => {
      const formatDateResult = formatDate('2021-01-12T03:00:00.000Z', { ignoreTimezone: true })
      const retrieveDateResult = retrieveDate(formatDateResult as string)

      const formatDateExpected = '2021-01-12T06:00:00.000Z'
      const retrieveDateExpected = '2021-01-12T03:00:00.000Z'

      expect(formatDateResult).to.be.deep.equal(formatDateExpected)
      expect(retrieveDateResult).to.be.deep.equal(retrieveDateExpected)
   })

   it ("Should be able to format 'Thu Mar 18 2021 20:27:53 GMT-0300 (Horário Padrão de Brasília)' to ISO format", () => {
      const formatDateResult = formatComponentDate('Thu Mar 18 2021 20:27:53 GMT-0300 (Horário Padrão de Brasília)')
      const retrieveDateResult = retrieveDate(formatDateResult as string)

      const formatDateExpected = '2021-03-18T03:00:00.000Z'
      const retrieveDateExpected = '2021-03-18T00:00:00.000Z'

      expect(formatDateResult).to.be.deep.equal(formatDateExpected)
      expect(retrieveDateResult).to.be.deep.equal(retrieveDateExpected)
   })

   it ('Should return null because date is invalid', () => {
      const formatDateResult = formatComponentDate('Thu Aleatorio 18 2021 21:27:53 GMT-0300 (Horário Padrão de Brasília)')

      expect(formatDateResult).to.be.deep.equal(null)
   })

   describe('diffDays()', () => {
      it('Should be able to return diff in days', () => {
         const result = diffDays('2021/01/12', '13/01/2021','DAYS')

         expect(result).to.be.deep.equal(1)
      })
   })
})