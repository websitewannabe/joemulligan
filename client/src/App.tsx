import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import VoteBadge from "./components/vote-badge";
import Home from "@/pages/home";
import AccessibilityStatement from "@/pages/accessibility-statement";
import Sitemap from "@/pages/sitemap";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/accessibility-statement" component={AccessibilityStatement} />
      <Route path="/sitemap" component={Sitemap} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <VoteBadge />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;