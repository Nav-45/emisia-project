import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { FileText, Download, TrendingUp } from 'lucide-react';

const SceneFive = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);

  const chartData = [
    { scope: "Scope 1", value: 3, color: "bg-red-500" },
    { scope: "Scope 2", value: 8, color: "bg-yellow-500" },
    { scope: "Scope 3", value: 89, color: "bg-green-500" },
  ];

  return (
    <motion.section 
      ref={ref}
      style={{ opacity }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-muted/30 to-background"
    >
      <div className="container mx-auto px-6 text-center">
        {/* Section entrance indicator */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "100px" } : {}}
          transition={{ duration: 0.8 }}
          className="h-1 bg-primary mx-auto mb-8 rounded"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Clean Output, <span className="text-accent">Client-Ready</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            From messy data to verified results — delivered faster, with transparency.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Chart visualization with animated bars */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Card className="p-8 bg-card shadow-eco border border-border">
                <h3 className="text-xl font-semibold text-card-foreground mb-6">Emissions Breakdown</h3>
                <div className="space-y-4">
                  {chartData.map((item, index) => (
                    <motion.div
                      key={item.scope}
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
                      className="relative"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-muted-foreground font-semibold">{item.scope}</span>
                        <span className="text-card-foreground font-bold">{item.value}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-4 overflow-hidden">
                        <motion.div
                          className={`h-4 rounded-full ${item.color}`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${item.value}%` } : {}}
                          transition={{ delay: 0.8 + index * 0.2, duration: 1.2, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Export options with hover effects */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-6"
            >
              {[
                { icon: FileText, label: "PDF Report", desc: "Client-ready sustainability report" },
                { icon: Download, label: "CSV Export", desc: "Raw data for further analysis" },
                { icon: TrendingUp, label: "API Access", desc: "Integrate with client systems" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.15, duration: 0.6 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileInView={{
                    x: [0, 5, 0],
                    transition: { duration: 2, repeat: Infinity, delay: index * 0.3 }
                  }}
                >
                  <Card className="p-6 bg-card shadow-soft border border-border hover:shadow-eco transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-card-foreground">{item.label}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SceneFive;