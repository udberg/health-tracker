import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Login from '../../Components/Login';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'example.com/test',
  }),
}));

describe('Login', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Login />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
