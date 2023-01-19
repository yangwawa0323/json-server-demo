// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { QueryClient, QueryClientProvider } from 'react-query';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const queryClient = new QueryClient();

const App = () => (
    <ThemeCustomization>
        <QueryClientProvider client={queryClient}>
            <ScrollTop>
                <Routes />
            </ScrollTop>
        </QueryClientProvider>
    </ThemeCustomization>
);

export default App;
