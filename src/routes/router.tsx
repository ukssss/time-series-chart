import App from '@/App';
import Error from '@/components/common/Error';
import { Main } from '@/pages';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Main />,
            },
        ],
    },
]);

export default router;
