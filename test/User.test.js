import { expect } from 'chai';
import User from '../src/User';

describe('User model', () => {
  before((done) => {
    User.remove({}, (err) => {
      done();
    });
  });

  it('should be invalid if email is empty', (done) => {
    var user = new User();
    user.validate((err) => {
      expect(err.errors.email).to.exist;
      done();
    });
  });
  it('should be invalid if password is empty', (done) => {
    var user = new User();
    user.validate((err) => {
      expect(err.errors.password).to.exist;
      done();
    });
  });
  it('should be valid if email and password exist', (done) => {
    var user = new User({email: "John@doe.com", password: "password"});
    user.validate((err) => {
      expect(err).to.null;
      done();
    });
  });
  it('should be saved with name, password', (done) => {
    var user = new User({email: "john@doe.com", password: "password"});
    user.save((err, user) => {
      expect(user).to.exist;
      done();
    });
  });
  it('should be passed with same password', (done) => {
    const email = "john@doe.com";
    const password = "password";
    User.findOne({email: email}, (err, user) => {
      user.comparePassword(password, (err, isMatch) => {
        expect(isMatch).to.equal(true);
        done();
      });
    });
  });
  it('should not be passed with wrong password', (done) => {
    const email = "john@doe.com";
    const password = "wrongword";
    User.findOne({email: email}, (err, user) => {
      user.comparePassword(password, (err, isMatch) => {
        expect(isMatch).to.equal(false);
        done();
      });
    });
  });
});
