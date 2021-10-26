import { expect } from 'chai';
import { describe, it } from 'mocha';
import MockDate from 'mockdate';
import { formatDate, Timezone } from '../../src';
import { formatDateTimeZone, retrieveDate } from '../../src/date/DateFormat';

const date = 1621356874897
MockDate.set(date)

describe('DateFormat', () => {
   it('Should be able to format dd/mm/yyyy to ISO format', () => {
      const formatDateResult = formatDate('12/01/2021')
      const retrieveDateResult = retrieveDate(formatDateResult as string)

      const formatDateExpected = '2021-01-12T00:00:00.000Z'
      const retrieveDateExpected = '2021-01-12T03:00:00.000Z'

      expect(formatDateResult).to.be.deep.equal(formatDateExpected)
      expect(retrieveDateResult).to.be.deep.equal(retrieveDateExpected)
   })

   it('Get timezones', () => {

      const dateUtc = '2021-10-26T11:28:53.808Z'

      const americaSaoPaulo = formatDateTimeZone(dateUtc, { timezone: Timezone.AMERICA_SAO_PAULO })
      const africaCairo = formatDateTimeZone(dateUtc, { timezone: Timezone.AFRICA_CAIRO })
      const americaArgentinaSanLuis = formatDateTimeZone(dateUtc, { timezone: Timezone.AMERICA_ARGENTINA_SAN_LUIS })
      const asiaAlmaty = formatDateTimeZone(dateUtc, { timezone: Timezone.ASIA_ALMATY })
      const tokio = formatDateTimeZone(dateUtc, { timezone: Timezone.ASIA_TOKYO })
      console.log(tokio)

      expect(tokio).to.be.deep.equal('2021-10-26T20:28:53.808Z')
      expect(asiaAlmaty).to.be.deep.equal('2021-10-26T17:28:53.808Z')
      expect(americaArgentinaSanLuis).to.be.deep.equal('2021-10-26T08:28:53.808Z')
      expect(africaCairo).to.be.deep.equal('2021-10-26T13:28:53.808Z')
      expect(americaSaoPaulo).to.be.deep.equal('2021-10-26T08:28:53.808Z')
   })

   // it('Should be able to format dd/mm/yyyy HH:mm to ISO format', () => {
   //    const formatDateResult = formatDate('12/01/2021 13:00')
   //    const retrieveDateResult = retrieveDate(formatDateResult as string)

   //    const formatDateExpected = '2021-01-12T13:00:00.000Z'
   //    const retrieveDateExpected = '2021-01-12T16:00:00.000Z'

   //    expect(formatDateResult).to.be.deep.equal(formatDateExpected)
   //    expect(retrieveDateResult).to.be.deep.equal(retrieveDateExpected)
   // })

   // it('Should be able to format yyyy/mm/dd to ISO format', () => {
   //    const formatDateResult = formatDate('2021/01/12')
   //    const retrieveDateResult = retrieveDate(formatDateResult as string)

   //    const formatDateExpected = '2021-01-12T00:00:00.000Z'
   //    const retrieveDateExpected = '2021-01-12T03:00:00.000Z'

   //    expect(formatDateResult).to.be.deep.equal(formatDateExpected)
   //    expect(retrieveDateResult).to.be.deep.equal(retrieveDateExpected)
   // })

   // it('Should be able to format yyyy/mm/dd HH:mm to ISO format', () => {
   //    const formatDateResult = formatDate('2021/01/12 13:00')
   //    const retrieveDateResult = retrieveDate(formatDateResult as string)

   //    const formatDateExpected = '2021-01-12T13:00:00.000Z'
   //    const retrieveDateExpected = '2021-01-12T16:00:00.000Z'

   //    expect(formatDateResult).to.be.deep.equal(formatDateExpected)
   //    expect(retrieveDateResult).to.be.deep.equal(retrieveDateExpected)
   // })

   // it('Should be able to format yyyy-mm-dd to ISO format', () => {
   //    const formatDateResult = formatDate('2021-01-12')
   //    const retrieveDateResult = retrieveDate(formatDateResult as string)

   //    const formatDateExpected = '2021-01-12T00:00:00.000Z'
   //    const retrieveDateExpected = '2021-01-12T03:00:00.000Z'

   //    expect(formatDateResult).to.be.deep.equal(formatDateExpected)
   //    expect(retrieveDateResult).to.be.deep.equal(retrieveDateExpected)
   // })

   // it('Should be able to format yyyy-mm-dd HH:mm to ISO format', () => {
   //    const formatDateResult = formatDate('2021-01-12')
   //    const retrieveDateResult = retrieveDate(formatDateResult as string)

   //    const formatDateExpected = '2021-01-12T00:00:00.000Z'
   //    const retrieveDateExpected = '2021-01-12T03:00:00.000Z'

   //    expect(formatDateResult).to.be.deep.equal(formatDateExpected)
   //    expect(retrieveDateResult).to.be.deep.equal(retrieveDateExpected)
   // })

   // it('Should be able to format yyyy-mm-ddTHH:mm:ssZ to ISO format', () => {
   //    const formatDateResult = formatDate('2021-01-12T03:00:00.000Z', { ignoreTimezone: true })
   //    const retrieveDateResult = retrieveDate(formatDateResult as string)

   //    const formatDateExpected = '2021-01-12T03:00:00.000Z'
   //    const retrieveDateExpected = '2021-01-12T06:00:00.000Z'

   //    expect(formatDateResult).to.be.deep.equal(formatDateExpected)
   //    expect(retrieveDateResult).to.be.deep.equal(retrieveDateExpected)
   // })

   // it ("Should be able to format 'Thu Mar 18 2021 20:27:53 GMT-0300 (Horário Padrão de Brasília)' to ISO format", () => {
   //    const formatDateResult = formatComponentDate('Thu Mar 18 2021 20:27:53 GMT-0300 (Horário Padrão de Brasília)')
   //    const retrieveDateResult = retrieveDate(formatDateResult as string)

   //    const formatDateExpected = '2021-03-18T00:00:00.000Z'
   //    const retrieveDateExpected = '2021-03-18T03:00:00.000Z'

   //    expect(formatDateResult).to.be.deep.equal(formatDateExpected)
   //    expect(retrieveDateResult).to.be.deep.equal(retrieveDateExpected)
   // })

   // it ('Should return null because date is invalid', () => {
   //    const formatDateResult = formatComponentDate('Thu Aleatorio 18 2021 21:27:53 GMT-0300 (Horário Padrão de Brasília)')

   //    expect(formatDateResult).to.be.deep.equal(null)
   // })

   // describe('diffDays()', () => {
   //    it('Should be able to return diff in days', () => {
   //       const result = diffDays('2021/01/12', '13/01/2021','DAYS')

   //       expect(result).to.be.deep.equal(1)
   //    })
   // })

   // describe('validateDateFormat()', () => {
   //    it ('Should return true with YYYY-MM-DDTHH:mm:ss.sssZ', () => {
   //       const date = '2020-06-01T03:00:00.000Z'
   //       const valid = validateDateFormat(date)
   //       expect(valid).to.be.deep.equal(true)
   //    })

   //    it ('Should return true with YYYY-MM-DDTHH:mm:ss', () => {
   //       const date = '2020-06-01T03:00:00'
   //       const valid = validateDateFormat(date)
   //       expect(valid).to.be.deep.equal(true)
   //    })

   //    it ('Should return true with YYYY-MM-DD HH:mm:ss', () => {
   //       const date = '2020-06-01 03:00:00'
   //       const valid = validateDateFormat(date)
   //       expect(valid).to.be.deep.equal(true)
   //    })

   //    it ('Should return true with DD/MM/YYYY', () => {
   //       const date = '02/03/2020'
   //       const valid = validateDateFormat(date)
   //       expect(valid).to.be.deep.equal(true)
   //    })

   //    it ('Should return true with DD/MM/YYYY HH:mm:ss', () => {
   //       const date = '02/03/2020 03:02:01'
   //       const valid = validateDateFormat(date)
   //       expect(valid).to.be.deep.equal(true)
   //    })
   //    it ('Should return true with YYYY/MM/DD', () => {
   //       const date = '2020/04/02'
   //       const valid = validateDateFormat(date)
   //       expect(valid).to.be.deep.equal(true)
   //    })

   //    it ('Should return false with invalid date', () => {
   //       const date = 'null'
   //       const valid = validateDateFormat(date)
   //       expect(valid).to.be.deep.equal(false)
   //    })

   //    it ('formatDate should return null because of validator', () => {
   //       const date = 'null'
   //       const result = formatDate(date)
   //       expect(result).to.be.deep.equal(null)
   //    })
   // })
})