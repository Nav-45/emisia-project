import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Users, DollarSign, Clock } from 'lucide-react';

const FinalScene = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const benefits = [
    {
      icon: DollarSign,
      title: "Save 80% on Costs",
      description: "No expensive consultants needed. Get professional results at a fraction of the cost.",
      color: "text-green-500"
    },
    {
      icon: Clock,
      title: "10x Faster Results",
      description: "What takes weeks manually, Emisia completes in hours with AI automation.",
      color: "text-blue-500"
    },
    {
      icon: Users,
      title: "Built for Small Teams",
      description: "Designed specifically for small businesses without dedicated sustainability teams.",
      color: "text-purple-500"
    }
  ];

  return (
    <motion.section 
      ref={ref}
      style={{ opacity }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-eco-light/20 to-background relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{
              left: `${10 + i * 20}%`,
              top: `${20 + i * 15}%`,
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
            }}
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Section entrance indicator */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "120px" } : {}}
          transition={{ duration: 0.8 }}
          className="h-1 bg-gradient-eco mx-auto mb-8 rounded"
        />

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Ready to Transform Your
            <motion.span
              className="block text-primary"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Carbon Reporting?
            </motion.span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Join hundreds of small businesses already using Emisia to simplify their sustainability journey.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="p-8 h-full bg-card shadow-soft border border-border hover:shadow-eco transition-all duration-300">
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                    transition: { duration: 2, repeat: Infinity, delay: index * 0.5 }
                  }}
                  className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-eco-light flex items-center justify-center`}
                >
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </motion.div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="bg-gradient-eco-light p-12 rounded-3xl border border-border/50 shadow-eco"
        >
          <motion.div
            animate={{
              scale: [1, 1.02, 1],
              transition: { duration: 3, repeat: Infinity }
            }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Start Your Free Trial Today
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              No credit card required. Get your first carbon report in minutes, not months.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="eco" size="xl" className="group shadow-eco">
              Get Started Free
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </Button>
            <Button variant="outline" size="xl">
              Schedule Demo
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="text-sm text-muted-foreground mt-6"
          >
            ✓ 14-day free trial  ✓ No setup fees  ✓ Cancel anytime
          </motion.p>
        </motion.div>

        {/* Floating logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-16"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block"
          >
            <img
              src="/lovable-uploads/05c202bc-a4d7-4f3f-800a-7d21233786b9.png"
              alt="Emisia Logo"
              className="w-16 h-16 mx-auto opacity-60"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FinalScene;