"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, Upload, X } from "@/components/ui/icons";

interface FormFieldProps {
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  options?: Array<{ value: string; label: string }>;
  rows?: number;
  className?: string;
}

export function FormField({
  label,
  type = "text",
  name,
  value,
  onChange,
  error,
  required = false,
  placeholder,
  options,
  rows = 4,
  className = ""
}: FormFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const hasValue = value.length > 0;
  const showFloatingLabel = isFocused || hasValue;

  const baseInputClasses = `
    w-full px-4 py-4 border-2 rounded-2xl transition-all duration-300 
    focus:outline-none focus:ring-0 bg-white/80 backdrop-blur-sm
    ${error && isTouched 
      ? 'border-red-400 focus:border-red-500' 
      : 'border-gray-200 focus:border-blue-500 hover:border-gray-300'
    }
    ${showFloatingLabel ? 'pt-6 pb-2' : ''}
  `;

  const renderInput = () => {
    if (type === 'textarea') {
      return (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            setIsTouched(true);
          }}
          placeholder={showFloatingLabel ? '' : placeholder}
          rows={rows}
          className={`${baseInputClasses} resize-none`}
          required={required}
        />
      );
    }

    if (type === 'select' && options) {
      return (
        <select
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            setIsTouched(true);
          }}
          className={baseInputClasses}
          required={required}
        >
          <option value="">{placeholder || `Select ${label}`}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }

    return (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          setIsTouched(true);
        }}
        placeholder={showFloatingLabel ? '' : placeholder}
        className={baseInputClasses}
        required={required}
      />
    );
  };

  return (
    <div className={`relative ${className}`}>
      <motion.div
        initial={false}
        animate={{
          scale: showFloatingLabel ? 0.85 : 1,
          y: showFloatingLabel ? -10 : 8,
          x: showFloatingLabel ? 8 : 16,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={`absolute pointer-events-none z-10 transition-colors duration-200 ${
          showFloatingLabel
            ? error && isTouched
              ? 'text-red-500 font-medium'
              : 'text-blue-600 font-medium'
            : 'text-gray-500'
        }`}
      >
        {label} {required && <span className="text-red-400">*</span>}
      </motion.div>
      
      {renderInput()}
      
      <AnimatePresence>
        {error && isTouched && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center space-x-2 mt-2 text-red-500 text-sm"
          >
            <AlertCircle className="h-4 w-4" />
            <span>{error}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface FileUploadProps {
  label: string;
  name: string;
  files: File[];
  onChange: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // in MB
  error?: string;
  required?: boolean;
}

export function FileUpload({
  label,
  name,
  files,
  onChange,
  accept = "*/*",
  multiple = false,
  maxSize = 10,
  error,
  required = false
}: FileUploadProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (selectedFiles: FileList | null) => {
    if (!selectedFiles) return;

    const fileArray = Array.from(selectedFiles);
    const validFiles = fileArray.filter(file => {
      const sizeInMB = file.size / (1024 * 1024);
      return sizeInMB <= maxSize;
    });

    if (multiple) {
      onChange([...files, ...validFiles]);
    } else {
      onChange(validFiles.slice(0, 1));
    }
  };

  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    onChange(newFiles);
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      
      <motion.div
        className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 cursor-pointer ${
          isDragOver
            ? 'border-blue-400 bg-blue-50'
            : error
            ? 'border-red-300 bg-red-50'
            : 'border-gray-300 hover:border-gray-400 bg-gray-50'
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragOver(true);
        }}
        onDragLeave={() => setIsDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragOver(false);
          handleFileSelect(e.dataTransfer.files);
        }}
        onClick={() => fileInputRef.current?.click()}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600 mb-2">
          Drag and drop files here, or <span className="text-blue-600 font-medium">browse</span>
        </p>
        <p className="text-sm text-gray-500">
          Max file size: {maxSize}MB
        </p>
        
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={(e) => handleFileSelect(e.target.files)}
          className="hidden"
        />
      </motion.div>

      {files.length > 0 && (
        <div className="space-y-2">
          <AnimatePresence>
            {files.map((file, index) => (
              <motion.div
                key={`${file.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-200"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{file.name}</p>
                    <p className="text-xs text-gray-500">
                      {(file.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(index);
                  }}
                  className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-2 text-red-500 text-sm"
        >
          <AlertCircle className="h-4 w-4" />
          <span>{error}</span>
        </motion.div>
      )}
    </div>
  );
}

interface SuccessMessageProps {
  title?: string;
  message?: string;
  onClose?: () => void;
}

export function SuccessMessage({ 
  title = "Success!", 
  message = "Your form has been submitted successfully.",
  onClose 
}: SuccessMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
    >
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="h-8 w-8 text-green-600" />
        </motion.div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-8">{message}</p>
        
        {onClose && (
          <button
            onClick={onClose}
            className="w-full bg-green-600 text-white py-3 px-6 rounded-2xl font-semibold hover:bg-green-700 transition-colors"
          >
            Continue
          </button>
        )}
      </motion.div>
    </motion.div>
  );
}
