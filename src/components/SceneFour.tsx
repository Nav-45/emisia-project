import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Upload, ArrowRight, Settings, CheckCircle } from 'lucide-react';

const SceneFour = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);

  return (
    <motion.section 
      ref={ref}
      style={{ opacity }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/30"
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
            Introducing <span className="text-primary">Emisia</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Emisia automates carbon calculations — from invoices to scope-tagged outputs.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Upload flow with pulse effects */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex-1"
            >
              <Card className="p-8 bg-card shadow-soft border border-border">
                <motion.div
                  whileInView={{
                    scale: [1, 1.1, 1],
                    transition: { duration: 2, repeat: Infinity }
                  }}
                >
                  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                </motion.div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Upload Data</h3>
                <p className="text-muted-foreground">Drag & drop invoices, receipts, activity data</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              whileInView={{
                x: [0, 10, 0],
                transition: { duration: 1.5, repeat: Infinity }
              }}
              className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-eco"
            >
              <ArrowRight className="w-6 h-6 text-primary-foreground" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex-1"
            >
              <Card className="p-8 bg-card shadow-soft border border-border">
                <motion.div
                  whileInView={{
                    rotate: [0, 360],
                    transition: { duration: 3, repeat: Infinity, ease: "linear" }
                  }}
                >
                  <Settings className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                </motion.div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Auto-Process</h3>
                <p className="text-muted-foreground">AI extracts, categorizes, and maps to scopes</p>
              </Card>
            </motion.div>
          </div>

          {/* Dashboard preview with flash effects */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="relative"
          >
            <Card className="p-8 bg-card shadow-eco border border-border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {[1, 2, 3].map((scope) => (
                  <motion.div
                    key={scope}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.2 + scope * 0.1, type: "spring" }}
                    whileInView={{
                      borderColor: scope === 1 ? ["#ef4444", "#fee2e2", "#ef4444"] :
                                   scope === 2 ? ["#f59e0b", "#fef3c7", "#f59e0b"] :
                                   ["#10b981", "#d1fae5", "#10b981"],
                      transition: { duration: 2, repeat: Infinity }
                    }}
                    className={`p-4 rounded-lg border-2 ${
                      scope === 1 ? 'bg-red-50 dark:bg-red-950' :
                      scope === 2 ? 'bg-yellow-50 dark:bg-yellow-950' :
                      'bg-green-50 dark:bg-green-950'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-card-foreground">Scope {scope}</span>
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          transition: { duration: 1.5, repeat: Infinity, delay: scope * 0.2 }
                        }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </motion.div>
                    </div>
                    <p className="text-2xl font-bold text-card-foreground">
                      {scope === 1 ? '1.2' : scope === 2 ? '3.8' : '42.1'} tCO₂e
                    </p>
                  </motion.div>
                ))}
              </div>
              <div className="text-center">
                <span className="text-sm text-muted-foreground font-medium">✓ Auto-tagged • ✓ Verified • ✓ Export Ready</span>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default SceneFour;