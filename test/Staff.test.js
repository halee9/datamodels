import { expect } from 'chai';
import Staff from '../src/Staff';

describe('Staff model', () => {
  before((done) => {
    Staff.remove({}, (err) => {
      done();
    });
  });
  it('should be invalid if name is empty', (done) => {
    var m = new Staff();
    m.validate((err) => {
      expect(err.errors.name).to.exist;
      done();
    });
  });
  it('should be invalid if passcode is empty', (done) => {
    var m = new Staff();
    m.validate((err) => {
      expect(err.errors.passcode).to.exist;
      done();
    });
  });
  it('should be valid if name and passcode exist', (done) => {
    var m = new Staff({name: "John", passcode: "1234"});
    m.validate((err) => {
      expect(err).to.null;
      done();
    });
  });
  it('should be saved if name and passcode exist', (done) => {
    var m = new Staff({name: "John", passcode: "1234"});
    m.save((err) => {
      expect(err).to.null;
      done();
    });
  });
  it('should get all staffs', (done) => {
    Staff.getAll().then((staffs) => {
      expect(staffs.length).to.equal(1);
      done();
    });
  });
});
