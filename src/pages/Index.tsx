import Navigation from '@/components/Navigation';
import HeroScene from '@/components/HeroScene';
import SceneFour from '@/components/SceneFour';
import SceneFive from '@/components/SceneFive';
import FinalScene from '@/components/FinalScene';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <main>
        <HeroScene />
        <SceneFour />
        <SceneFive />
        <FinalScene />
      </main>
    </div>
  );
};

export default Index;
