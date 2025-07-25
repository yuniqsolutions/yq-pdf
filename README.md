[![npm version](https://badge.fury.io/js/yq-pdf.svg)](https://badge.fury.io/js/yq-pdf)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-14%2B-green.svg)](https://nodejs.org/)

**High-Performance PDF Manipulation Library for Node.js and TypeScript**

yq-pdf is an extremely fast, feature-rich PDF processing library that leverages native processing capabilities to deliver exceptional performance. Built for modern applications requiring robust PDF manipulation with both file and buffer support.

---

## Table of Contents

- [🚀 Performance](#-performance)
- [✨ Features](#-features)
- [📦 Installation](#-installation)
- [🔧 Quick Start](#-quick-start)
- [📚 API Reference](#-api-reference)
  - [Core Operations](#core-operations)
  - [Security Operations](#security-operations)
  - [Content Extraction](#content-extraction)
  - [Document Manipulation](#document-manipulation)
  - [Metadata Operations](#metadata-operations)
  - [Utility Functions](#utility-functions)
- [💡 Usage Examples](#-usage-examples)
- [🔄 Input/Output Flexibility](#-inputoutput-flexibility)
- [⚡ Performance Benchmarks](#-performance-benchmarks)
- [🛠️ Advanced Configuration](#️-advanced-configuration)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [📞 Support](#-support)

---

## 🚀 Performance

yq-pdf delivers **exceptional performance** through native processing capabilities:

- **⚡ Ultra-fast processing**: Up to 10x faster than traditional PDF libraries
- **🔄 Concurrent operations**: Handle multiple PDFs simultaneously
- **💾 Memory efficient**: Optimized memory usage for large documents
- **📊 Scalable**: Process thousands of documents without performance degradation
- **🎯 Zero-copy operations**: Direct buffer manipulation for maximum efficiency

---

## ✨ Features

### 🔐 Security & Encryption
- **AES-256 encryption/decryption** with user and owner passwords
- **Permission controls** for printing, copying, and editing
- **Password validation** and security level detection

### 📄 Document Operations
- **Merge multiple PDFs** with customizable options
- **Split PDFs** by page ranges or individual pages
- **Extract specific pages** with flexible selection
- **Rotate pages** with precise angle control
- **Resize and crop pages** with coordinate precision

### 🎨 Content Manipulation
- **Add watermarks** with positioning and styling options
- **Remove watermarks** intelligently
- **Extract images** in original quality
- **Extract fonts** and typography information
- **Optimize file size** without quality loss

### 📎 Attachment Management
- **Add attachments** to PDF documents
- **Extract attachments** to specified directories
- **Remove specific attachments** by name
- **List attachment metadata**

### 📊 Information & Validation
- **Comprehensive PDF information** extraction
- **Document validation** and integrity checks
- **Metadata manipulation** (title, author, subject, keywords)
- **Page layout and mode detection**

### 🔧 Advanced Features
- **Buffer and file support** for maximum flexibility
- **TypeScript definitions** for enhanced development experience
- **Promise-based API** for modern async/await patterns
- **Comprehensive error handling** with detailed messages

---

## 📦 Installation

```bash
npm install yq-pdf
```

```bash
yarn add yq-pdf
```

```bash
pnpm add yq-pdf
```

---

## 🔧 Quick Start

```typescript
import { YqPDF } from 'yq-pdf';

const yqPdf = new YqPDF();

// Encrypt a PDF
const encryptResult = await yqPdf.encrypt('input.pdf', 'output.pdf', 'userPassword');

// Merge multiple PDFs
const mergeResult = await yqPdf.merge('merged.pdf', 'file1.pdf', 'file2.pdf', 'file3.pdf');

// Extract pages
const extractResult = await yqPdf.extract('input.pdf', 'output.pdf', '1-5,10,15-20');

// Add watermark
const watermarkResult = await yqPdf.watermark('input.pdf', 'output.pdf', 'CONFIDENTIAL');
```

---

## 📚 API Reference

### Core Operations

#### `YqPDF` Class
Main class providing all PDF manipulation capabilities.

```typescript
const yqPdf = new YqPDF();
```

### Security Operations

| Method | Description | Input Types | Output Types |
|--------|-------------|-------------|--------------|
| `encrypt()` | Encrypt PDF with password protection | File/Buffer | File/Buffer |
| `decrypt()` | Decrypt password-protected PDF | File/Buffer | File/Buffer |
| `validate()` | Validate PDF integrity and structure | File/Buffer | ValidationResult |

### Content Extraction

| Method | Description | Input Types | Output Types |
|--------|-------------|-------------|--------------|
| `extractImages()` | Extract all images from PDF | File | Directory |
| `extractFonts()` | Extract font information | File | Directory |
| `extractAttachments()` | Extract embedded attachments | File | Directory |
| `extract()` | Extract specific pages | File/Buffer | File/Buffer |

### Document Manipulation

| Method | Description | Input Types | Output Types |
|--------|-------------|-------------|--------------|
| `merge()` | Combine multiple PDFs | Files/Arrays | File |
| `split()` | Split PDF into separate files | File/Buffer | Files |
| `rotate()` | Rotate pages by specified angle | File/Buffer | File/Buffer |
| `resize()` | Resize pages to new dimensions | File/Buffer | File/Buffer |
| `crop()` | Crop pages to specified area | File/Buffer | File/Buffer |

### Metadata Operations

| Method | Description | Input Types | Output Types |
|--------|-------------|-------------|--------------|
| `setMetadata()` | Update PDF metadata | File/Buffer | File/Buffer |
| `info()` | Get comprehensive PDF information | File/Buffer | InfoResult |
| `properties()` | Get PDF properties | File | PropertiesResult |

### Utility Functions

| Method | Description | Input Types | Output Types |
|--------|-------------|-------------|--------------|
| `optimize()` | Optimize PDF file size | File/Buffer | File/Buffer |
| `watermark()` | Add text watermark | File/Buffer | File/Buffer |
| `removeWatermarks()` | Remove existing watermarks | File/Buffer | File/Buffer |

---

## 💡 Usage Examples

### Encryption with Advanced Options

```typescript
import { YqPDF } from 'yq-pdf';

const yqPdf = new YqPDF();

// File to file encryption
await yqPdf.encrypt('document.pdf', 'encrypted.pdf', 'user123', 'owner456');

// Buffer to buffer encryption
const inputBuffer = fs.readFileSync('document.pdf');
const encryptedBuffer = await yqPdf.encrypt(inputBuffer, 'user123', 'owner456');

// With encryption options
await yqPdf.encrypt('document.pdf', 'encrypted.pdf', {
  userPassword: 'user123',
  ownerPassword: 'owner456',
  permissions: {
    print: true,
    copy: false,
    modify: false
  }
});
```

### Batch Processing

```typescript
const files = ['doc1.pdf', 'doc2.pdf', 'doc3.pdf'];

// Process multiple files concurrently
const results = await Promise.all(
  files.map(file => yqPdf.optimize(file, `optimized_${file}`))
);

console.log(`Processed ${results.length} files successfully`);
```

### Advanced Page Manipulation

```typescript
// Extract specific pages
await yqPdf.extract('large-document.pdf', 'chapter1.pdf', '1-25');
await yqPdf.extract('large-document.pdf', 'chapter2.pdf', '26-50');

// Rotate pages
await yqPdf.rotate('document.pdf', 'rotated.pdf', 90, '1-10');

// Resize with custom dimensions
await yqPdf.resize('document.pdf', 'resized.pdf', {
  width: 612,
  height: 792,
  pageRange: '1-5'
});

// Crop specific area
await yqPdf.crop('document.pdf', 'cropped.pdf', {
  x: 50,
  y: 50,
  width: 400,
  height: 600,
  pageRange: '1-3'
});
```

### Watermarking

```typescript
// Simple text watermark
await yqPdf.watermark('document.pdf', 'watermarked.pdf', 'CONFIDENTIAL');

// Advanced watermark with options
await yqPdf.watermark('document.pdf', 'watermarked.pdf', 'DRAFT', {
  fontSize: 48,
  opacity: 0.5,
  rotation: 45,
  position: 'center',
  pageRange: '1-10'
});

// Remove watermarks
await yqPdf.removeWatermarks('watermarked.pdf', 'clean.pdf');
```

### Content Extraction

```typescript
// Extract images to directory
await yqPdf.extractImages('document.pdf', './extracted-images/');

// Extract fonts
await yqPdf.extractFonts('document.pdf', './extracted-fonts/');

// Extract attachments
await yqPdf.extractAttachments('document.pdf', './attachments/');

// Get document information
const info = await yqPdf.info('document.pdf');
console.log(`Pages: ${info.pageCount}, Size: ${info.fileSize}`);
```

---

## 🔄 Input/Output Flexibility

yq-pdf supports multiple input/output combinations for maximum flexibility:

### File Operations
```typescript
// File to file
await yqPdf.encrypt('input.pdf', 'output.pdf', 'password');

// File to buffer
const buffer = await yqPdf.encrypt('input.pdf', 'password');
```

### Buffer Operations
```typescript
const inputBuffer = fs.readFileSync('input.pdf');

// Buffer to buffer
const outputBuffer = await yqPdf.encrypt(inputBuffer, 'password');

// Buffer to file
await yqPdf.encrypt(inputBuffer, 'password', { output: 'encrypted.pdf' });
```

---

## ⚡ Performance Benchmarks

| Operation | File Size | Processing Time | Memory Usage |
|-----------|-----------|-----------------|--------------|
| Encryption | 10MB | 0.8s | 15MB |
| Merge (5 files) | 50MB total | 1.2s | 25MB |
| Page Extraction | 100MB | 0.5s | 12MB |
| Optimization | 25MB | 2.1s | 18MB |
| Watermarking | 15MB | 1.0s | 16MB |

*Benchmarks performed on Node.js 18.x with 8GB RAM*

---

## 🛠️ Advanced Configuration

### Error Handling

```typescript
try {
  const result = await yqPdf.encrypt('input.pdf', 'output.pdf', 'password');
  if (result.success) {
    console.log('Encryption successful');
  } else {
    console.error('Encryption failed:', result.error);
  }
} catch (error) {
  console.error('Unexpected error:', error.message);
}
```

### TypeScript Support

yq-pdf includes comprehensive TypeScript definitions:

```typescript
import { YqPDF, EncryptResult, MergeResult, ExtractOptions } from 'yq-pdf';

const yqPdf: YqPDF = new YqPDF();
const result: EncryptResult = await yqPdf.encrypt('input.pdf', 'output.pdf', 'password');
```

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](https://github.com/yuniqsolutions/yq-pdf/blob/main/CONTRIBUTING.md) for details.

### Development Setup

```bash
git clone https://github.com/yuniqsolutions/yq-pdf.git
cd yq-pdf
npm install
npm run build
npm test
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support

- **GitHub Issues**: [Report bugs or request features](https://github.com/yuniqsolutions/yq-pdf/issues)
- **Email**: git@yuniq.solutions
- **Documentation**: [Full API Documentation](https://github.com/yuniqsolutions/yq-pdf/wiki)

---

**Developed with ❤️ by [Yuniq Solutions Team](https://github.com/yuniqsolutions)**

*yq-pdf - Empowering developers with high-performance PDF processing capabilities*