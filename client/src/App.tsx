import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import VoteBadge from "./components/vote-badge";
import Home from "@/pages/home";
import AccessibilityStatement from "@/pages/accessibility-statement";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/accessibility-statement" component={AccessibilityStatement} />
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