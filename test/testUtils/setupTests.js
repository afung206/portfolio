const chai = require('chai');
const sinonChai = require('sinon-chai');
const enzyme = require('enzyme');
const adapter = require('enzyme-adapter-react-16');
const chaiEnzyme = require('chai-enzyme')

enzyme.configure({adapter: new adapter()});

chai.use(sinonChai);
chai.use(chaiEnzyme);