import { strict as assert } from 'assert'
import { calculate } from './index.js'

describe('calculate +', () => {
  it('should add 1 + 2 to equal 3', () => {
    assert.equal(calculate(1, 2, '+'), 3)
  })
})

describe('calculate -', () => {
    it('should add 1 + 2 to equal 3', () => {
      assert.equal(calculate(2, 1, '-'), 1)
    })
  })

  describe('calculate sqrt', () => {
    it('should throw error', () => {
        assert.throws(() => calculate(2, 1, 'squareroot'), Error)
    })
  })