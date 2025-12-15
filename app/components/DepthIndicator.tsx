'use client';

import styles from './DepthIndicator.module.css';

interface DepthIndicatorProps {
  currentDepth: number;
  maxDepth: number;
}

export default function DepthIndicator({ currentDepth, maxDepth }: DepthIndicatorProps) {
  return (
    <div className={styles.depthIndicator}>
      Depth: <span id="depth-value">{currentDepth}</span>/{maxDepth}
    </div>
  );
}
