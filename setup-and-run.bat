@echo off
REM UPI Shield Fraud Detection - Setup and Run Script
echo ========================================
echo UPI Shield Fraud Detection Setup
echo ========================================
echo.
echo [Step 1] Cloning repository...
git clone https://github.com/eshwar-21/Upi-shield-fraud-detection.git
cd Upi-shield-fraud-detection
echo.
echo [Step 2] Installing Python dependencies...
pip install -r requirements.txt
echo.
echo [Step 3] Installing Node.js dependencies...
npm install
echo.
echo [Step 4] Starting development server...
echo.
echo ========================================
echo Opening browser at http://localhost:5173
echo ========================================
start http://localhost:5173
echo.
echo Starting npm dev server...
npm run dev
echo.
echo To train ML models in another terminal, run: python scripts/train_model.py
