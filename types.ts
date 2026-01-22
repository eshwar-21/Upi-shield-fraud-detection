import React from 'react';

export interface Transaction {
  id?: string;
  timestamp: string;
  sender_name: string;
  sender_upi: string;
  receiver_name: string;
  receiver_upi: string;
  amount: number;
  status: string;
}

export interface ConfusionMatrix {
  tp: number;
  tn: number;
  fp: number;
  fn: number;
}

export interface RegressionMetrics {
  mse: number; // Mean Squared Error
  mae: number; // Mean Absolute Error
  r2: number;  // R-Square
}

export interface ModelMetrics {
  name: string;
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  loss?: number[];
  confusionMatrix: ConfusionMatrix;
  regressionMetrics: RegressionMetrics;
  featureImportance: { name: string; score: number }[];
}

export interface FraudAnalysisResult {
  riskScore: number;
  riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
  reasoning: string[];
  recommendation: string;
  activeModel?: string;
}

export interface DatasetStats {
  totalRows: number;
  failureRate: string;
  avgAmount: string;
  topReceivers: string[];
  riskVectors: string[];
  rawRows?: string[];
  models: {
    ann: ModelMetrics;
    randomForest: ModelMetrics;
    best: string;
  };
}

/**
 * Custom element registration for Spline viewer.
 * Using module augmentation for 'react' ensures that 'spline-viewer' is added to 
 * the existing set of standard HTML elements (nav, div, button, etc.) instead 
 * of replacing the entire IntrinsicElements interface.
 */
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        url?: string;
        hint?: string;
        loading?: string;
        'events-target'?: string;
      };
    }
  }
}

/**
 * Global declarations for environment variables.
 */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_KEY: string;
    }
  }
}

export {};