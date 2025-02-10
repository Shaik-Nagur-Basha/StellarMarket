// components/AugmentedRealityViewer.js
import React from "react";

export default function AugmentedRealityViewer() {
  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">
        Augmented Reality Product Viewer
      </h1>
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl p-6 flex flex-col items-center">
        <p className="text-gray-700 mb-4">
          Experience our product in 3D and AR mode.
        </p>
        <div className="w-full h-96 bg-gray-300 flex items-center justify-center rounded-lg">
          {/* Placeholder for AR Model Viewer */}
          <span className="text-xl font-bold text-gray-600">
            [AR Model Viewer Placeholder]
          </span>
        </div>
        <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
          Launch AR Viewer
        </button>
      </div>
    </div>
  );
}

//AugmentedRealityViewer;
