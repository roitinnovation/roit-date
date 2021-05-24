import { expect } from 'chai';
import { describe, it } from 'mocha';
import { formatDate, diffDays } from '../../src';
import { formatComponentDate, retrieveDate, validateDateFormat, getActualDate } from '../../src/date/DateFormat';
import MockDate from 'mockdate'

const date = 1621356874897
MockDate.set(date)

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

   describe('validateDateFormat()', () => {
      it ('Should return true with YYYY-MM-DDTHH:mm:ss.sssZ', () => {
         const date = '2020-06-01T03:00:00.000Z'
         const valid = validateDateFormat(date)
         expect(valid).to.be.deep.equal(true)
      })

      it ('Should return true with YYYY-MM-DDTHH:mm:ss', () => {
         const date = '2020-06-01T03:00:00'
         const valid = validateDateFormat(date)
         expect(valid).to.be.deep.equal(true)
      })

      it ('Should return true with YYYY-MM-DD HH:mm:ss', () => {
         const date = '2020-06-01 03:00:00'
         const valid = validateDateFormat(date)
         expect(valid).to.be.deep.equal(true)
      })

      it ('Should return true with DD/MM/YYYY', () => {
         const date = '02/03/2020'
         const valid = validateDateFormat(date)
         expect(valid).to.be.deep.equal(true)
      })

      it ('Should return true with DD/MM/YYYY HH:mm:ss', () => {
         const date = '02/03/2020 03:02:01'
         const valid = validateDateFormat(date)
         expect(valid).to.be.deep.equal(true)
      })
      it ('Should return true with YYYY/MM/DD', () => {
         const date = '2020/04/02'
         const valid = validateDateFormat(date)
         expect(valid).to.be.deep.equal(true)
      })

      it ('Should return false with invalid date', () => {
         const date = 'null'
         const valid = validateDateFormat(date)
         expect(valid).to.be.deep.equal(false)
      })

      it ('formatDate should return null because of validator', () => {
         const date = 'null'
         const result = formatDate(date)
         expect(result).to.be.deep.equal(null)
      })
   })
})

describe('getActualDate()', () => {
   it('Should be able to retrieve an actual date', () => {
      const response = getActualDate()

      expect(response).to.be.deep.equal(null)
   })
})