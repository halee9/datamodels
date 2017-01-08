import { expect } from 'chai';
import Staff from '../src/Staff';

describe('Staff model', () => {
  let id;
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
  it('should be saved if name and passcode exist', (done) => {
    var m = new Staff({name: "jane", passcode: "1111"});
    m.save((err, data) => {
      expect(err).to.null;
      id = data._id;
      done();
    });
  });
  it('should get all staffs', (done) => {
    Staff.getAll().then((staffs) => {
      expect(staffs.length).to.equal(2);
      done();
    });
  });
  it('should get a staff by id', (done) => {
    Staff.getById(id).then((staff) => {
      expect(staff.name).to.equal("jane");
      done();
    });
  });

});
