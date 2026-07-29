import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';

// Layout & Pages
import { RootLayout } from '@/components/layout/RootLayout';
import Home from '@/pages/home';
import About from '@/pages/about';
import Facilities from '@/pages/facilities';
import Admissions from '@/pages/admissions';
import Contact from '@/pages/contact';
import Gallery from '@/pages/gallery';
import Feedback from '@/pages/feedback';

const queryClient = new QueryClient();

function Router() {
  return (
    <RootLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/facilities" component={Facilities} />
        <Route path="/admissions" component={Admissions} />
        <Route path="/contact" component={Contact} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/feedback" component={Feedback} />
        <Route component={NotFound} />
      </Switch>
    </RootLayout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
