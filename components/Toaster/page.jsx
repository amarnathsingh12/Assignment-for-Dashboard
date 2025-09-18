"use client";

import { toast } from "sonner";
import {
  CheckCircle,
  XCircle,
  AlertCircle,
  AlertTriangle,
} from "lucide-react";
import { cn } from "@/lib/utils"; // Optional utility for merging classes

export const handleToast = (type, item = { name: "Unknown" }) => {
  const toastConfig = {
    fail: {
      message: "Operation Failed",
      description: `Failed to process: ${item.name}`,
      className: "bg-red-50 border border-red-200 text-red-900 shadow-lg",
      icon: <XCircle className="w-5 h-5 text-red-500" />,
    },
    pass: {
      description: `${item.name}`,
      className: "bg-green-50 border border-green-200 text-green-900 shadow-lg",
      icon: <CheckCircle className="w-5 h-5 text-blue-500" />,
    },
    error: {
      message: "Error Occurred",
      description: `Error processing: ${item.name}`,
      className: "bg-red-100 border border-red-300 text-red-900 shadow-lg",
      icon: <AlertCircle className="w-5 h-5 text-red-600" />,
    },
    warning: {
      message: "Warning",
      description: `Caution for: ${item.name}`,
      className: "bg-yellow-50 border border-yellow-200 text-yellow-900 shadow-lg",
      icon: <AlertTriangle className="w-5 h-5 text-yellow-600" />,
    },
  };

  const config = toastConfig[type] || toastConfig.error;

  toast.custom(
    (t) => (
      <div
        className={cn(
          "w-full max-w-sm p-4 rounded-lg flex items-start gap-4",
          config.className
        )}
      >
        <div className="pt-1">{config.icon}</div>
        <div className="flex-1">
          <h3 className="text-base font-semibold">{config.message}</h3>
          <p className="text-sm mt-1 text-gray-700">{config.description}</p>
        </div>
        <button
          onClick={() => toast.dismiss(t.id)}
          className="ml-2 text-sm text-gray-500 hover:text-gray-800"
        >
          ✖
        </button>
      </div>
    ),
    {
      duration: 4000,
    }
  );
};
