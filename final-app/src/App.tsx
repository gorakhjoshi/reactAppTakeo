import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { getRandom } from './shared/helpers/math.utils';
import { httpMocks } from './shared/helpers/http-mocks';

// httpMocks({ success: true, randomFailure: false })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((reject) => {
//     console.log(reject);
//   });



export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/home"
          element={
            <Stack spacing={2} direction="row">
              <Button variant="contained">React TypeScript App</Button>
            </Stack>
          }
        />
      </Routes>
    </Router>
  );
}
