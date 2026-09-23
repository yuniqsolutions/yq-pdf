// ============================================================================
// OPTIONS INTERFACES (Input parameters)
// ============================================================================
/**
 * Options for encrypting a PDF document
 */
export interface EncryptOptions {
	/** The password required to open the PDF (user password) */
	userPassword: string;
	/** The password required to modify the PDF (owner password). If not provided, uses userPassword */
	ownerPassword?: string;
}
/**
 * Options for decrypting a PDF document
 */
export interface DecryptOptions {
	/** The password to decrypt the PDF document */
	password: string;
}
/**
 * Options for splitting a PDF document into multiple files
 */
export interface SplitOptions {
	/** Number of pages per split file */
	span: number;
}
/**
 * Options for extracting specific pages from a PDF document
 */
export interface ExtractOptions {
	/** Page range to extract (e.g., "1-5", "2,4,6", "1-3,7-9") */
	pageRange: string;
}
/**
 * Options for rotating pages in a PDF document
 */
export interface RotateOptions {
	/** Rotation angle in degrees (90, 180, 270, or -90, -180, -270) */
	rotation: number;
	/** Page range to rotate (e.g., "1-5", "2,4,6"). If not specified, rotates all pages */
	pageRange?: string;
}
/**
 * Options for validating a PDF document
 */
export interface ValidateOptions {
	/** Validation mode - 'strict' for rigorous validation, 'relaxed' for lenient validation */
	mode?: "strict" | "relaxed";
}
/**
 * Options for adding watermarks to a PDF document
 */
export interface WatermarkOptions {
	/** The text to use as watermark */
	text: string;
	/** Page range to watermark (e.g., "1-5", "2,4,6"). If not specified, watermarks all pages */
	pageRange?: string;
}
/**
 * Options for removing watermarks from a PDF document
 */
export interface RemoveWatermarkOptions {
	/** Page range to remove watermarks from (e.g., "1-5", "2,4,6"). If not specified, removes from all pages */
	pageRange?: string;
}
/**
 * Options for removing watermarks from a PDF document (alternative interface)
 */
export interface RemoveWatermarksOptions {
	/** Page range to remove watermarks from (e.g., "1-5", "2,4,6"). If not specified, removes from all pages */
	pageRange?: string;
	/** Output file path for the result */
	output?: string;
}
/**
 * Options for extracting images from a PDF document
 */
export interface ExtractImagesOptions {
	/** Page range to extract images from (e.g., "1-5", "2,4,6"). If not specified, extracts from all pages */
	pageRange?: string;
}
/**
 * Options for extracting fonts from a PDF document
 */
export interface ExtractFontsOptions {
	/** Page range to extract fonts from (e.g., "1-5", "2,4,6"). If not specified, extracts from all pages */
	pageRange?: string;
}
/**
 * Options for setting metadata in a PDF document
 */
export interface MetadataOptions {
	/** Document title */
	title?: string;
	/** Document author */
	author?: string;
	/** Document subject */
	subject?: string;
	/** Document keywords */
	keywords?: string;
	/** Document creator application */
	creator?: string;
	/** PDF producer application */
	producer?: string;
}
/**
 * Options for resizing pages in a PDF document
 */
export interface ResizeOptions {
	/** Target width in points */
	width: number;
	/** Target height in points */
	height: number;
	/** Page range to resize (e.g., "1-5", "2,4,6"). If not specified, resizes all pages */
	pageRange?: string;
}
/**
 * Options for cropping pages in a PDF document
 */
export interface CropOptions {
	/** X coordinate of the crop area (left edge) in points */
	x: number;
	/** Y coordinate of the crop area (bottom edge) in points */
	y: number;
	/** Width of the crop area in points */
	width: number;
	/** Height of the crop area in points */
	height: number;
	/** Page range to crop (e.g., "1-5", "2,4,6"). If not specified, crops all pages */
	pageRange?: string;
}
// ============================================================================
// RESULT TYPES (Discriminated Unions)
// ============================================================================
/**
 * Success result for PDF encryption operation
 */
export interface EncryptSuccess {
	/** Indicates the operation was successful */
	success: true;
	/** Success message describing the operation result */
	message: string;
}
/**
 * Error result for PDF encryption operation
 */
export interface EncryptError {
	/** Indicates the operation failed */
	success: false;
	/** Error message describing what went wrong */
	error: string;
}
/**
 * Result type for PDF encryption operations
 * @example
 * ```typescript
 * const result = await pdf.encrypt(input, options);
 * if (result.success) {
 *   console.log(result.message);
 * } else {
 *   console.error(result.error);
 * }
 * ```
 */
export type EncryptResult = EncryptSuccess | EncryptError;
/**
 * Success result for PDF decryption operation
 */
export interface DecryptSuccess {
	/** Indicates the operation was successful */
	success: true;
	/** Success message describing the operation result */
	message: string;
}
/**
 * Error result for PDF decryption operation
 */
export interface DecryptError {
	/** Indicates the operation failed */
	success: false;
	/** Error message describing what went wrong */
	error: string;
}
/**
 * Result type for PDF decryption operations
 * @example
 * ```typescript
 * const result = await pdf.decrypt(input, options);
 * if (result.success) {
 *   console.log(result.message);
 * } else {
 *   console.error(result.error);
 * }
 * ```
 */
export type DecryptResult = DecryptSuccess | DecryptError;
/**
 * Success result for PDF merge operation
 */
export interface MergeSuccess {
	/** Indicates the operation was successful */
	success: true;
	/** Success message describing the operation result */
	message: string;
}
/**
 * Error result for PDF merge operation
 */
export interface MergeError {
	/** Indicates the operation failed */
	success: false;
	/** Error message describing what went wrong */
	error: string;
}
/**
 * Result type for PDF merge operations
 * @example
 * ```typescript
 * const result = await pdf.merge(inputs, output);
 * if (result.success) {
 *   console.log(result.message);
 * } else {
 *   console.error(result.error);
 * }
 * ```
 */
export type MergeResult = MergeSuccess | MergeError;
/**
 * Success result for PDF split operation
 */
export interface SplitSuccess {
	/** Indicates the operation was successful */
	success: true;
	/** Success message describing the operation result */
	message: string;
}
/**
 * Error result for PDF split operation
 */
export interface SplitError {
	/** Indicates the operation failed */
	success: false;
	/** Error message describing what went wrong */
	error: string;
}
/**
 * Result type for PDF split operations
 * @example
 * ```typescript
 * const result = await pdf.split(input, options);
 * if (result.success) {
 *   console.log(result.message);
 * } else {
 *   console.error(result.error);
 * }
 * ```
 */
export type SplitResult = SplitSuccess | SplitError;
/**
 * Success result for PDF page extraction operation
 */
export interface ExtractSuccess {
	/** Indicates the operation was successful */
	success: true;
	/** Success message describing the operation result */
	message: string;
}
/**
 * Error result for PDF page extraction operation
 */
export interface ExtractError {
	/** Indicates the operation failed */
	success: false;
	/** Error message describing what went wrong */
	error: string;
}
/**
 * Result type for PDF page extraction operations
 * @example
 * ```typescript
 * const result = await pdf.extract(input, options);
 * if (result.success) {
 *   console.log(result.message);
 * } else {
 *   console.error(result.error);
 * }
 * ```
 */
export type ExtractResult = ExtractSuccess | ExtractError;
/**
 * Success result for PDF rotation operation
 */
export interface RotateSuccess {
	/** Indicates the operation was successful */
	success: true;
	/** Success message describing the operation result */
	message: string;
}
/**
 * Error result for PDF rotation operation
 */
export interface RotateError {
	/** Indicates the operation failed */
	success: false;
	/** Error message describing what went wrong */
	error: string;
}
/**
 * Result type for PDF rotation operations
 * @example
 * ```typescript
 * const result = await pdf.rotate(input, options);
 * if (result.success) {
 *   console.log(result.message);
 * } else {
 *   console.error(result.error);
 * }
 * ```
 */
export type RotateResult = RotateSuccess | RotateError;
/**
 * Success result for PDF information retrieval operation
 */
export interface PDFInfoSuccess {
	/** Indicates the operation was successful */
	success: true;
	/** Document title */
	title: string;
	/** Document author */
	author: string;
	/** Document subject */
	subject: string;
	/** Document creator application */
	creator: string;
	/** PDF producer application */
	producer: string;
	/** Document creation date */
	creation_date: string;
	/** Document modification date */
	modification_date: string;
	/** Total number of pages in the document */
	page_count: number;
	/** PDF version (e.g., "1.4", "1.7") */
	pdf_version: string;
	/** Whether the document is encrypted */
	encrypted: boolean;
	/** Whether the document is linearized (optimized for web viewing) */
	linearized: boolean;
	/** Whether the document is tagged (accessible) */
	tagged: boolean;
	/** Whether the document contains forms */
	form: boolean;
	/** Whether the document contains digital signatures */
	signatures: boolean;
	/** Whether the document contains watermarks */
	watermarked: boolean;
	/** Whether the document contains page thumbnails */
	thumbnails: boolean;
	/** Whether the document contains bookmarks/outlines */
	outlines: boolean;
	/** Whether the document contains file attachments */
	attachments: boolean;
	/** List of document permissions */
	permissions: string[];
}
/**
 * Error result for PDF information retrieval operation
 */
export interface PDFInfoError {
	/** Indicates the operation failed */
	success: false;
	/** Error message describing what went wrong */
	error: string;
}
/**
 * Result type for PDF information retrieval operations
 * @example
 * ```typescript
 * const result = await pdf.info(input);
 * if (result.success) {
 *   console.log(`Pages: ${result.page_count}, Version: ${result.pdf_version}`);
 * } else {
 *   console.error(result.error);
 * }
 * ```
 */
export type PDFInfo = PDFInfoSuccess | PDFInfoError;
/**
 * Success result for PDF validation operation
 */
export interface ValidateSuccess {
	/** Indicates the operation was successful */
	success: true;
	/** Whether the PDF is valid according to the validation mode */
	valid: boolean;
	/** Validation result message */
	message: string;
}
/**
 * Error result for PDF validation operation
 */
export interface ValidateError {
	/** Indicates the operation failed */
	success: false;
	/** Error message describing what went wrong */
	error: string;
}
/**
 * Result type for PDF validation operations
 * @example
 * ```typescript
 * const result = await pdf.validate(input, options);
 * if (result.success) {
 *   console.log(`Valid: ${result.valid}, Message: ${result.message}`);
 * } else {
 *   console.error(result.error);
 * }
 * ```
 */
export type ValidateResult = ValidateSuccess | ValidateError;
/**
 * Success result for PDF optimization operation
 */
export interface OptimizeSuccess {
	/** Indicates the operation was successful */
	success: true;
	/** Success message describing the operation result */
	message: string;
}
/**
 * Error result for PDF optimization operation
 */
export interface OptimizeError {
	/** Indicates the operation failed */
	success: false;
	/** Error message describing what went wrong */
	error: string;
}
/**
 * Result type for PDF optimization operations
 * @example
 * ```typescript
 * const result = await pdf.optimize(input, output);
 * if (result.success) {
 *   console.log(result.message);
 * } else {
 *   console.error(result.error);
 * }
 * ```
 */
export type OptimizeResult = OptimizeSuccess | OptimizeError;
/**
 * Success result for PDF watermark operation
 */
export interface WatermarkSuccess {
	/** Indicates the operation was successful */
	success: true;
	/** Success message describing the operation result */
	message: string;
}
/**
 * Error result for PDF watermark operation
 */
export interface WatermarkError {
	/** Indicates the operation failed */
	success: false;
	/** Error message describing what went wrong */
	error: string;
}
/**
 * Result type for PDF watermark operations
 * @example
 * ```typescript
 * const result = await pdf.watermark(input, options);
 * if (result.success) {
 *   console.log(result.message);
 * } else {
 *   console.error(result.error);
 * }
 * ```
 */
export type WatermarkResult = WatermarkSuccess | WatermarkError;
/**
 * Success result for PDF watermark removal operation
 */
export interface RemoveWatermarkSuccess {
	/** Indicates the operation was successful */
	success: true;
	/** Success message describing the operation result */
	message: string;
}
/**
 * Error result for PDF watermark removal operation
 */
export interface RemoveWatermarkError {
	/** Indicates the operation failed */
	success: false;
	/** Error message describing what went wrong */
	error: string;
}
/**
 * Result type for PDF watermark removal operations
 * @example
 * ```typescript
 * const result = await pdf.removeWatermark(input, options);
 * if (result.success) {
 *   console.log(result.message);
 * } else {
 *   console.error(result.error);
 * }
 * ```
 */
export type RemoveWatermarkResult = RemoveWatermarkSuccess | RemoveWatermarkError;
/**
 * Success result for PDF watermarks removal operation (alternative method)
 */
export interface RemoveWatermarksSuccess {
	/** Indicates the operation was successful */
	success: true;
	/** Success message describing the operation result */
	message: string;
}
/**
 * Error result for PDF watermarks removal operation (alternative method)
 */
export interface RemoveWatermarksError {
	/** Indicates the operation failed */
	success: false;
	/** Error message describing what went wrong */
	error: string;
}
/**
 * Result type for PDF watermarks removal operations (alternative method)
 * @example
 * ```typescript
 * const result = await pdf.removeWatermarks(input, options);
 * if (result.success) {
 *   console.log(result.message);
 * } else {
 *   console.error(result.error);
 * }
 * ```
 */
export type RemoveWatermarksResult = RemoveWatermarksSuccess | RemoveWatermarksError;
/**
 * Success result for PDF image extraction operation
 */
export interface ExtractImagesSuccess {
	/** Indicates the operation was successful */
	success: true;
	/** Success message describing the operation result */
	message: string;
}
/**
 * Error result for PDF image extraction operation
 */
export interface ExtractImagesError {
	/** Indicates the operation failed */
	success: false;
	/** Error message describing what went wrong */
	error: string;
}
/**
 * Result type for PDF image extraction operations
 * @example
 * ```typescript
 * const result = await pdf.extractImages(input, options);
 * if (result.success) {
 *   console.log(result.message);
 * } else {
 *   console.error(result.error);
 * }
 * ```
 */
export type ExtractImagesResult = ExtractImagesSuccess | ExtractImagesError;
/**
 * Success result for PDF font extraction operation
 */
export interface ExtractFontsSuccess {
	/** Indicates the operation was successful */
	success: true;
	/** Success message describing the operation result */
	message: string;
}
/**
 * Error result for PDF font extraction operation
 */
export interface ExtractFontsError {
	/** Indicates the operation failed */
	success: false;
	/** Error message describing what went wrong */
	error: string;
}
/**
 * Result type for PDF font extraction operations
 * @example
 * ```typescript
 * const result = await pdf.extractFonts(input, options);
 * if (result.success) {
 *   console.log(result.message);
 * } else {
 *   console.error(result.error);
 * }
 * ```
 */
export type ExtractFontsResult = ExtractFontsSuccess | ExtractFontsError;
/**
 * Success result for PDF attachment extraction operation
 */
export interface ExtractAttachmentsSuccess {
	/** Indicates the operation was successful */
	success: true;
	/** Success message describing the operation result */
	message: string;
}
/**
 * Error result for PDF attachment extraction operation
 */
export interface ExtractAttachmentsError {
	/** Indicates the operation failed */
	success: false;
	/** Error message describing what went wrong */
	error: string;
}
/**
 * Result type for PDF attachment extraction operations
 * @example
 * ```typescript
 * const result = await pdf.extractAttachments(input, outputDir);
 * if (result.success) {
 *   console.log(result.message);
 * } else {
 *   console.error(result.error);
 * }
 * ```
 */
export type ExtractAttachmentsResult = ExtractAttachmentsSuccess | ExtractAttachmentsError;
/**
 * Success result for PDF attachment addition operation
 */
export interface AddAttachmentsSuccess {
	/** Indicates the operation was successful */
	success: true;
	/** Success message describing the operation result */
	message: string;
}
/**
 * Error result for PDF attachment addition operation
 */
export interface AddAttachmentsError {
	/** Indicates the operation failed */
	success: false;
	/** Error message describing what went wrong */
	error: string;
}
/**
 * Result type for PDF attachment addition operations
 * @example
 * ```typescript
 * const result = await pdf.addAttachments(input, attachments, output);
 * if (result.success) {
 *   console.log(result.message);
 * } else {
 *   console.error(result.error);
 * }
 * ```
 */
export type AddAttachmentsResult = AddAttachmentsSuccess | AddAttachmentsError;
/**
 * Success result for PDF attachment removal operation
 */
export interface RemoveAttachmentsSuccess {
	/** Indicates the operation was successful */
	success: true;
	/** Success message describing the operation result */
	message: string;
}
/**
 * Error result for PDF attachment removal operation
 */
export interface RemoveAttachmentsError {
	/** Indicates the operation failed */
	success: false;
	/** Error message describing what went wrong */
	error: string;
}
/**
 * Result type for PDF attachment removal operations
 * @example
 * ```typescript
 * const result = await pdf.removeAttachments(input, output);
 * if (result.success) {
 *   console.log(result.message);
 * } else {
 *   console.error(result.error);
 * }
 * ```
 */
export type RemoveAttachmentsResult = RemoveAttachmentsSuccess | RemoveAttachmentsError;
/**
 * Success result for PDF metadata setting operation
 */
export interface SetMetadataSuccess {
	/** Indicates the operation was successful */
	success: true;
	/** Success message describing the operation result */
	message: string;
}
/**
 * Error result for PDF metadata setting operation
 */
export interface SetMetadataError {
	/** Indicates the operation failed */
	success: false;
	/** Error message describing what went wrong */
	error: string;
}
/**
 * Result type for PDF metadata setting operations
 * @example
 * ```typescript
 * const result = await pdf.setMetadata(input, metadata, output);
 * if (result.success) {
 *   console.log(result.message);
 * } else {
 *   console.error(result.error);
 * }
 * ```
 */
export type SetMetadataResult = SetMetadataSuccess | SetMetadataError;
/**
 * Success result for PDF properties retrieval operation
 */
export interface PropertiesSuccess {
	/** Indicates the operation was successful */
	success: true;
	/** The properties data returned from the operation */
	data: any;
	/** Success message describing the operation result */
	message: string;
}
/**
 * Error result for PDF properties retrieval operation
 */
export interface PropertiesError {
	/** Indicates the operation failed */
	success: false;
	/** Error message describing what went wrong */
	error: string;
}
/**
 * Result type for PDF properties retrieval operations
 * @example
 * ```typescript
 * const result = await pdf.properties(input);
 * if (result.success) {
 *   console.log(result.data);
 * } else {
 *   console.error(result.error);
 * }
 * ```
 */
export type PropertiesResult = PropertiesSuccess | PropertiesError;
/**
 * Success result for PDF dump operation
 */
export interface DumpSuccess {
	/** Indicates the operation was successful */
	success: true;
	/** The dump data returned from the operation */
	data: any;
	/** Success message describing the operation result */
	message: string;
}
/**
 * Error result for PDF dump operation
 */
export interface DumpError {
	/** Indicates the operation failed */
	success: false;
	/** Error message describing what went wrong */
	error: string;
}
/**
 * Result type for PDF dump operations
 * @example
 * ```typescript
 * const result = await pdf.dump(input);
 * if (result.success) {
 *   console.log(result.data);
 * } else {
 *   console.error(result.error);
 * }
 * ```
 */
export type DumpResult = DumpSuccess | DumpError;
/**
 * Success result for PDF page layout listing operation
 */
export interface ListPageLayoutSuccess {
	/** Indicates the operation was successful */
	success: true;
	/** The page layout data returned from the operation */
	data: any;
	/** Success message describing the operation result */
	message: string;
}
/**
 * Error result for PDF page layout listing operation
 */
export interface ListPageLayoutError {
	/** Indicates the operation failed */
	success: false;
	/** Error message describing what went wrong */
	error: string;
}
/**
 * Result type for PDF page layout listing operations
 * @example
 * ```typescript
 * const result = await pdf.listPageLayout(input);
 * if (result.success) {
 *   console.log(result.data);
 * } else {
 *   console.error(result.error);
 * }
 * ```
 */
export type ListPageLayoutResult = ListPageLayoutSuccess | ListPageLayoutError;
/**
 * Success result for PDF page mode listing operation
 */
export interface ListPageModeSuccess {
	/** Indicates the operation was successful */
	success: true;
	/** The page mode data returned from the operation */
	data: any;
	/** Success message describing the operation result */
	message: string;
}
/**
 * Error result for PDF page mode listing operation
 */
export interface ListPageModeError {
	/** Indicates the operation failed */
	success: false;
	/** Error message describing what went wrong */
	error: string;
}
/**
 * Result type for PDF page mode listing operations
 * @example
 * ```typescript
 * const result = await pdf.listPageMode(input);
 * if (result.success) {
 *   console.log(result.data);
 * } else {
 *   console.error(result.error);
 * }
 * ```
 */
export type ListPageModeResult = ListPageModeSuccess | ListPageModeError;
/**
 * Success result for PDF resize operation
 */
export interface ResizeSuccess {
	/** Indicates the operation was successful */
	success: true;
	/** Success message describing the operation result */
	message: string;
}
/**
 * Error result for PDF resize operation
 */
export interface ResizeError {
	/** Indicates the operation failed */
	success: false;
	/** Error message describing what went wrong */
	error: string;
}
/**
 * Result type for PDF resize operations
 * @example
 * ```typescript
 * const result = await pdf.resize(input, options, output);
 * if (result.success) {
 *   console.log(result.message);
 * } else {
 *   console.error(result.error);
 * }
 * ```
 */
export type ResizeResult = ResizeSuccess | ResizeError;
/**
 * Success result for PDF crop operation
 */
export interface CropSuccess {
	/** Indicates the operation was successful */
	success: true;
	/** Success message describing the operation result */
	message: string;
}
/**
 * Error result for PDF crop operation
 */
export interface CropError {
	/** Indicates the operation failed */
	success: false;
	/** Error message describing what went wrong */
	error: string;
}
/**
 * Result type for PDF crop operations
 * @example
 * ```typescript
 * const result = await pdf.crop(input, options, output);
 * if (result.success) {
 *   console.log(result.message);
 * } else {
 *   console.error(result.error);
 * }
 * ```
 */
export type CropResult = CropSuccess | CropError;
/**
 * YqPDF - A comprehensive PDF processing library
 *
 * This class provides a wide range of PDF manipulation capabilities including:
 * - Encryption and decryption
 * - Merging and splitting
 * - Page extraction and rotation
 * - Watermarking and optimization
 * - Metadata manipulation
 * - Image and font extraction
 * - Attachment management
 * - Validation and information retrieval
 *
 * All methods support both file paths and Buffer inputs/outputs for maximum flexibility.
 * Results are returned as discriminated unions for type-safe error handling.
 *
 * @example
 * ```typescript
 * const pdf = new YqPDF();
 *
 * // Encrypt a PDF
 * const result = await pdf.encrypt('input.pdf', 'password', 'output.pdf');
 * if (result.success) {
 *   console.log('PDF encrypted successfully');
 * } else {
 *   console.error('Encryption failed:', result.error);
 * }
 *
 * // Work with buffers
 * const buffer = await pdf.encrypt(inputBuffer, 'password');
 * ```
 */
export declare class YqPDF {
	private timeout;
	/**
	 * Creates a new YqPDF instance
	 *
	 * @param timeout - Maximum time in milliseconds to wait for operations to complete (default: 30000)
	 *
	 * @example
	 * ```typescript
	 * // Use default timeout (30 seconds)
	 * const pdf = new YqPDF();
	 *
	 * // Use custom timeout (60 seconds)
	 * const pdf = new YqPDF(60000);
	 * ```
	 */
	constructor(timeout?: number);
	private executeCommand;
	/**
	 * Encrypts a PDF document with password protection
	 *
	 * This method provides extensive overloading to support various input/output combinations:
	 * - File to Buffer: Returns encrypted PDF as Buffer
	 * - File to File: Saves encrypted PDF to specified path
	 * - Buffer to Buffer: Processes Buffer input and returns Buffer output
	 * - Buffer to File: Processes Buffer input and saves to file
	 *
	 * @param input - Input PDF file path or Buffer
	 * @param userPassword - Password required to open the PDF
	 * @returns Promise resolving to Buffer containing encrypted PDF
	 *
	 * @example
	 * ```typescript
	 * // Encrypt file and get Buffer
	 * const encryptedBuffer = await pdf.encrypt('input.pdf', 'userpass');
	 *
	 * // Encrypt buffer and get Buffer
	 * const encryptedBuffer = await pdf.encrypt(inputBuffer, 'userpass');
	 * ```
	 */
	encrypt(input: string, userPassword: string): Promise<Buffer>;
	/**
	 * Encrypts a PDF document with user and owner passwords
	 *
	 * @param input - Input PDF file path or Buffer
	 * @param userPassword - Password required to open the PDF
	 * @param ownerPassword - Password required to modify the PDF
	 * @returns Promise resolving to Buffer containing encrypted PDF
	 *
	 * @example
	 * ```typescript
	 * // Encrypt with both passwords
	 * const buffer = await pdf.encrypt('input.pdf', 'userpass', 'ownerpass');
	 * ```
	 */
	encrypt(input: string, userPassword: string, ownerPassword: string): Promise<Buffer>;
	/**
	 * Encrypts a PDF document using options object
	 *
	 * @param input - Input PDF file path or Buffer
	 * @param options - Encryption options containing passwords
	 * @returns Promise resolving to Buffer containing encrypted PDF
	 *
	 * @example
	 * ```typescript
	 * const buffer = await pdf.encrypt('input.pdf', {
	 *   userPassword: 'userpass',
	 *   ownerPassword: 'ownerpass'
	 * });
	 * ```
	 */
	encrypt(input: string, options: EncryptOptions): Promise<Buffer>;
	/**
	 * Encrypts a PDF document and saves to file
	 *
	 * @param input - Input PDF file path
	 * @param userPassword - Password required to open the PDF
	 * @param output - Output file path for encrypted PDF
	 * @returns Promise resolving to EncryptResult indicating success/failure
	 *
	 * @example
	 * ```typescript
	 * const result = await pdf.encrypt('input.pdf', 'userpass', 'encrypted.pdf');
	 * if (result.success) {
	 *   console.log('Encryption successful');
	 * } else {
	 *   console.error('Encryption failed:', result.error);
	 * }
	 * ```
	 */
	encrypt(input: string, userPassword: string, output: string): Promise<EncryptResult>;
	/**
	 * Encrypts a PDF document with user and owner passwords and saves to file
	 *
	 * @param input - Input PDF file path
	 * @param userPassword - Password required to open the PDF
	 * @param ownerPassword - Password required to modify the PDF
	 * @param output - Output file path for encrypted PDF
	 * @returns Promise resolving to EncryptResult indicating success/failure
	 */
	encrypt(input: string, userPassword: string, ownerPassword: string, output: string): Promise<EncryptResult>;
	/**
	 * Encrypts a PDF document using options object and saves to file
	 *
	 * @param input - Input PDF file path
	 * @param options - Encryption options containing passwords and output path
	 * @returns Promise resolving to EncryptResult indicating success/failure
	 */
	encrypt(input: string, options: EncryptOptions & {
		output: string;
	}): Promise<EncryptResult>;
	/**
	 * Encrypts a PDF Buffer with password protection
	 *
	 * @param input - Input PDF Buffer
	 * @param userPassword - Password required to open the PDF
	 * @returns Promise resolving to Buffer containing encrypted PDF
	 */
	encrypt(input: Buffer, userPassword: string): Promise<Buffer>;
	/**
	 * Encrypts a PDF Buffer with user and owner passwords
	 *
	 * @param input - Input PDF Buffer
	 * @param userPassword - Password required to open the PDF
	 * @param ownerPassword - Password required to modify the PDF
	 * @returns Promise resolving to Buffer containing encrypted PDF
	 */
	encrypt(input: Buffer, userPassword: string, ownerPassword: string): Promise<Buffer>;
	/**
	 * Encrypts a PDF Buffer using options object
	 *
	 * @param input - Input PDF Buffer
	 * @param options - Encryption options containing passwords
	 * @returns Promise resolving to Buffer containing encrypted PDF
	 */
	encrypt(input: Buffer, options: EncryptOptions): Promise<Buffer>;
	/**
	 * Encrypts a PDF Buffer and saves to file
	 *
	 * @param input - Input PDF Buffer
	 * @param userPassword - Password required to open the PDF
	 * @param output - Output file path for encrypted PDF
	 * @returns Promise resolving to EncryptResult indicating success/failure
	 */
	encrypt(input: Buffer, userPassword: string, output: string): Promise<EncryptResult>;
	/**
	 * Encrypts a PDF Buffer with user and owner passwords and saves to file
	 *
	 * @param input - Input PDF Buffer
	 * @param userPassword - Password required to open the PDF
	 * @param ownerPassword - Password required to modify the PDF
	 * @param output - Output file path for encrypted PDF
	 * @returns Promise resolving to EncryptResult indicating success/failure
	 */
	encrypt(input: Buffer, userPassword: string, ownerPassword: string, output: string): Promise<EncryptResult>;
	/**
	 * Encrypts a PDF Buffer using options object and saves to file
	 *
	 * @param input - Input PDF Buffer
	 * @param options - Encryption options containing passwords and output path
	 * @returns Promise resolving to EncryptResult indicating success/failure
	 */
	encrypt(input: Buffer, options: EncryptOptions & {
		output: string;
	}): Promise<EncryptResult>;
	/**
	 * Decrypts a password-protected PDF document
	 *
	 * This method provides extensive overloading to support various input/output combinations:
	 * - File to Buffer: Returns decrypted PDF as Buffer
	 * - File to File: Saves decrypted PDF to specified path
	 * - Buffer to Buffer: Processes Buffer input and returns Buffer output
	 * - Buffer to File: Processes Buffer input and saves to file
	 *
	 * @param input - Input PDF file path or Buffer
	 * @param password - Password to decrypt the PDF
	 * @returns Promise resolving to Buffer containing decrypted PDF
	 *
	 * @example
	 * ```typescript
	 * // Decrypt file and get Buffer
	 * const decryptedBuffer = await pdf.decrypt('encrypted.pdf', 'password');
	 *
	 * // Decrypt buffer and get Buffer
	 * const decryptedBuffer = await pdf.decrypt(encryptedBuffer, 'password');
	 * ```
	 */
	decrypt(input: string, password: string): Promise<Buffer>;
	/**
	 * Decrypts a password-protected PDF document using options object
	 *
	 * @param input - Input PDF file path or Buffer
	 * @param options - Decryption options containing password
	 * @returns Promise resolving to Buffer containing decrypted PDF
	 *
	 * @example
	 * ```typescript
	 * const buffer = await pdf.decrypt('encrypted.pdf', {
	 *   password: 'mypassword'
	 * });
	 * ```
	 */
	decrypt(input: string, options: DecryptOptions): Promise<Buffer>;
	/**
	 * Decrypts a password-protected PDF document and saves to file
	 *
	 * @param input - Input PDF file path
	 * @param password - Password to decrypt the PDF
	 * @param output - Output file path for decrypted PDF
	 * @returns Promise resolving to DecryptResult indicating success/failure
	 *
	 * @example
	 * ```typescript
	 * const result = await pdf.decrypt('encrypted.pdf', 'password', 'decrypted.pdf');
	 * if (result.success) {
	 *   console.log('Decryption successful');
	 * } else {
	 *   console.error('Decryption failed:', result.error);
	 * }
	 * ```
	 */
	decrypt(input: string, password: string, output: string): Promise<DecryptResult>;
	/**
	 * Decrypts a password-protected PDF document using options object and saves to file
	 *
	 * @param input - Input PDF file path
	 * @param options - Decryption options containing password and output path
	 * @returns Promise resolving to DecryptResult indicating success/failure
	 */
	decrypt(input: string, options: DecryptOptions & {
		output: string;
	}): Promise<DecryptResult>;
	/**
	 * Decrypts a password-protected PDF Buffer
	 *
	 * @param input - Input PDF Buffer
	 * @param password - Password to decrypt the PDF
	 * @returns Promise resolving to Buffer containing decrypted PDF
	 */
	decrypt(input: Buffer, password: string): Promise<Buffer>;
	/**
	 * Decrypts a password-protected PDF Buffer using options object
	 *
	 * @param input - Input PDF Buffer
	 * @param options - Decryption options containing password
	 * @returns Promise resolving to Buffer containing decrypted PDF
	 */
	decrypt(input: Buffer, options: DecryptOptions): Promise<Buffer>;
	/**
	 * Decrypts a password-protected PDF Buffer and saves to file
	 *
	 * @param input - Input PDF Buffer
	 * @param password - Password to decrypt the PDF
	 * @param output - Output file path for decrypted PDF
	 * @returns Promise resolving to DecryptResult indicating success/failure
	 */
	decrypt(input: Buffer, password: string, output: string): Promise<DecryptResult>;
	/**
	 * Decrypts a password-protected PDF Buffer using options object and saves to file
	 *
	 * @param input - Input PDF Buffer
	 * @param options - Decryption options containing password and output path
	 * @returns Promise resolving to DecryptResult indicating success/failure
	 */
	decrypt(input: Buffer, options: DecryptOptions & {
		output: string;
	}): Promise<DecryptResult>;
	/**
	 * Merges multiple PDF files into a single PDF document
	 *
	 * @param output - Output file path for the merged PDF
	 * @param inputs - Variable number of input PDF file paths to merge
	 * @returns Promise resolving to MergeResult indicating success/failure
	 *
	 * @example
	 * ```typescript
	 * // Merge multiple PDFs using spread syntax
	 * const result = await pdf.merge('merged.pdf', 'file1.pdf', 'file2.pdf', 'file3.pdf');
	 * if (result.success) {
	 *   console.log('PDFs merged successfully');
	 * } else {
	 *   console.error('Merge failed:', result.error);
	 * }
	 * ```
	 */
	merge(output: string, ...inputs: string[]): Promise<MergeResult>;
	/**
	 * Merges multiple PDF files into a single PDF document using an array
	 *
	 * @param output - Output file path for the merged PDF
	 * @param inputs - Array of input PDF file paths to merge
	 * @returns Promise resolving to MergeResult indicating success/failure
	 *
	 * @example
	 * ```typescript
	 * // Merge PDFs using an array
	 * const inputFiles = ['file1.pdf', 'file2.pdf', 'file3.pdf'];
	 * const result = await pdf.merge('merged.pdf', inputFiles);
	 * if (result.success) {
	 *   console.log('PDFs merged successfully');
	 * } else {
	 *   console.error('Merge failed:', result.error);
	 * }
	 * ```
	 */
	merge(output: string, inputs: string[]): Promise<MergeResult>;
	/**
	 * Splits a PDF document into multiple files based on page span
	 *
	 * @param input - Input PDF file path
	 * @param outDir - Output directory for split PDF files
	 * @param options - Split options containing span and other settings
	 * @returns Promise resolving to SplitResult indicating success/failure
	 *
	 * @example
	 * ```typescript
	 * // Split PDF every 5 pages using options
	 * const result = await pdf.split('large.pdf', './output', { span: 5 });
	 * if (result.success) {
	 *   console.log('PDF split successfully');
	 * } else {
	 *   console.error('Split failed:', result.error);
	 * }
	 * ```
	 */
	split(input: string, outDir: string, options: SplitOptions): Promise<SplitResult>;
	/**
	 * Splits a PDF document into multiple files based on page span
	 *
	 * @param input - Input PDF file path
	 * @param outDir - Output directory for split PDF files
	 * @param span - Number of pages per split file
	 * @returns Promise resolving to SplitResult indicating success/failure
	 *
	 * @example
	 * ```typescript
	 * // Split PDF every 3 pages
	 * const result = await pdf.split('large.pdf', './output', 3);
	 * ```
	 */
	split(input: string, outDir: string, span: number): Promise<SplitResult>;
	/**
	 * Extracts specific pages from a PDF document using options object
	 *
	 * @param input - Input PDF file path
	 * @param output - Output PDF file path for extracted pages
	 * @param options - Extract options containing page range and other settings
	 * @returns Promise resolving to ExtractResult indicating success/failure
	 *
	 * @example
	 * ```typescript
	 * // Extract pages using options
	 * const result = await pdf.extract('input.pdf', 'output.pdf', { pageRange: '1-5,10,15-20' });
	 * if (result.success) {
	 *   console.log('Pages extracted successfully');
	 * } else {
	 *   console.error('Extraction failed:', result.error);
	 * }
	 * ```
	 */
	extract(input: string, output: string, options: ExtractOptions): Promise<ExtractResult>;
	/**
	 * Extracts specific pages from a PDF document using page range string
	 *
	 * @param input - Input PDF file path
	 * @param output - Output PDF file path for extracted pages
	 * @param pageRange - Page range string (e.g., "1-5,10,15-20")
	 * @returns Promise resolving to ExtractResult indicating success/failure
	 *
	 * @example
	 * ```typescript
	 * // Extract pages 1-5 and page 10
	 * const result = await pdf.extract('input.pdf', 'output.pdf', '1-5,10');
	 * ```
	 */
	extract(input: string, output: string, pageRange: string): Promise<ExtractResult>;
	/**
	 * Extracts specific pages from a PDF document using page numbers array
	 *
	 * @param input - Input PDF file path
	 * @param output - Output PDF file path for extracted pages
	 * @param pages - Array of page numbers to extract
	 * @returns Promise resolving to ExtractResult indicating success/failure
	 *
	 * @example
	 * ```typescript
	 * // Extract specific pages by number
	 * const result = await pdf.extract('input.pdf', 'output.pdf', [1, 3, 5, 7]);
	 * ```
	 */
	extract(input: string, output: string, pages: number[]): Promise<ExtractResult>;
	/**
	 * Extracts a single page from a PDF document
	 *
	 * @param input - Input PDF file path
	 * @param output - Output PDF file path for extracted page
	 * @param page - Page number to extract
	 * @returns Promise resolving to ExtractResult indicating success/failure
	 *
	 * @example
	 * ```typescript
	 * // Extract just page 5
	 * const result = await pdf.extract('input.pdf', 'page5.pdf', 5);
	 * ```
	 */
	extract(input: string, output: string, page: number): Promise<ExtractResult>;
	/**
	 * Rotates pages in a PDF document
	 *
	 * This method provides extensive overloading to support various input/output combinations:
	 * - File to Buffer: Returns rotated PDF as Buffer
	 * - File to File: Saves rotated PDF to specified path
	 * - Buffer to Buffer: Processes Buffer input and returns Buffer output
	 * - Buffer to File: Processes Buffer input and saves to file
	 *
	 * @param input - Input PDF file path or Buffer
	 * @param rotation - Rotation angle in degrees (90, 180, 270, or -90, -180, -270)
	 * @returns Promise resolving to Buffer containing rotated PDF
	 *
	 * @example
	 * ```typescript
	 * // Rotate all pages 90 degrees clockwise
	 * const rotatedBuffer = await pdf.rotate('input.pdf', 90);
	 *
	 * // Rotate buffer 180 degrees
	 * const rotatedBuffer = await pdf.rotate(inputBuffer, 180);
	 * ```
	 */
	rotate(input: string, rotation: number): Promise<Buffer>;
	/**
	 * Rotates pages in a PDF document using options object
	 *
	 * @param input - Input PDF file path or Buffer
	 * @param options - Rotation options containing rotation angle and page range
	 * @returns Promise resolving to Buffer containing rotated PDF
	 *
	 * @example
	 * ```typescript
	 * const buffer = await pdf.rotate('input.pdf', {
	 *   rotation: 90,
	 *   pageRange: '1-5'
	 * });
	 * ```
	 */
	rotate(input: string, options: RotateOptions): Promise<Buffer>;
	/**
	 * Rotates pages in a PDF document and saves to file
	 *
	 * @param input - Input PDF file path
	 * @param rotation - Rotation angle in degrees
	 * @param output - Output file path for rotated PDF
	 * @returns Promise resolving to RotateResult indicating success/failure
	 *
	 * @example
	 * ```typescript
	 * const result = await pdf.rotate('input.pdf', 90, 'rotated.pdf');
	 * if (result.success) {
	 *   console.log('Rotation successful');
	 * } else {
	 *   console.error('Rotation failed:', result.error);
	 * }
	 * ```
	 */
	rotate(input: string, rotation: number, output: string): Promise<RotateResult>;
	/**
	 * Rotates specific pages in a PDF document and saves to file
	 *
	 * @param input - Input PDF file path
	 * @param rotation - Rotation angle in degrees
	 * @param pageRange - Page range string (e.g., "1-5,10")
	 * @param output - Output file path for rotated PDF
	 * @returns Promise resolving to RotateResult indicating success/failure
	 */
	rotate(input: string, rotation: number, pageRange: string, output: string): Promise<RotateResult>;
	/**
	 * Rotates pages in a PDF document using options object and saves to file
	 *
	 * @param input - Input PDF file path
	 * @param options - Rotation options containing rotation angle, page range, and output path
	 * @returns Promise resolving to RotateResult indicating success/failure
	 */
	rotate(input: string, options: RotateOptions & {
		output: string;
	}): Promise<RotateResult>;
	/**
	 * Rotates pages in a PDF Buffer
	 *
	 * @param input - Input PDF Buffer
	 * @param rotation - Rotation angle in degrees
	 * @returns Promise resolving to Buffer containing rotated PDF
	 */
	rotate(input: Buffer, rotation: number): Promise<Buffer>;
	/**
	 * Rotates pages in a PDF Buffer using options object
	 *
	 * @param input - Input PDF Buffer
	 * @param options - Rotation options containing rotation angle and page range
	 * @returns Promise resolving to Buffer containing rotated PDF
	 */
	rotate(input: Buffer, options: RotateOptions): Promise<Buffer>;
	/**
	 * Rotates pages in a PDF Buffer and saves to file
	 *
	 * @param input - Input PDF Buffer
	 * @param rotation - Rotation angle in degrees
	 * @param output - Output file path for rotated PDF
	 * @returns Promise resolving to RotateResult indicating success/failure
	 */
	rotate(input: Buffer, rotation: number, output: string): Promise<RotateResult>;
	/**
	 * Rotates specific pages in a PDF Buffer and saves to file
	 *
	 * @param input - Input PDF Buffer
	 * @param rotation - Rotation angle in degrees
	 * @param pageRange - Page range string (e.g., "1-5,10")
	 * @param output - Output file path for rotated PDF
	 * @returns Promise resolving to RotateResult indicating success/failure
	 */
	rotate(input: Buffer, rotation: number, pageRange: string, output: string): Promise<RotateResult>;
	/**
	 * Rotates pages in a PDF Buffer using options object and saves to file
	 *
	 * @param input - Input PDF Buffer
	 * @param options - Rotation options containing rotation angle, page range, and output path
	 * @returns Promise resolving to RotateResult indicating success/failure
	 */
	rotate(input: Buffer, options: RotateOptions & {
		output: string;
	}): Promise<RotateResult>;
	/**
	 * Retrieves information about a PDF document
	 *
	 * Returns detailed metadata about the PDF including page count, file size,
	 * creation date, modification date, title, author, and other properties.
	 *
	 * @param input - Input PDF file path
	 * @returns Promise resolving to PDFInfo containing document information
	 *
	 * @example
	 * ```typescript
	 * const info = await pdf.info('document.pdf');
	 * if (info.success) {
	 *   console.log(`Pages: ${info.pages}`);
	 *   console.log(`Title: ${info.title}`);
	 *   console.log(`Author: ${info.author}`);
	 * } else {
	 *   console.error('Failed to get info:', info.error);
	 * }
	 * ```
	 */
	info(input: string): Promise<PDFInfo>;
	/**
	 * Validates a PDF document for compliance and integrity
	 *
	 * @param input - Input PDF file path
	 * @param options - Validation options containing mode and other settings
	 * @returns Promise resolving to ValidateResult indicating validation status
	 *
	 * @example
	 * ```typescript
	 * // Validate with options
	 * const result = await pdf.validate('document.pdf', { mode: 'strict' });
	 * if (result.success) {
	 *   console.log('PDF is valid');
	 * } else {
	 *   console.error('Validation failed:', result.error);
	 * }
	 * ```
	 */
	validate(input: string, options?: ValidateOptions): Promise<ValidateResult>;
	/**
	 * Validates a PDF document for compliance and integrity
	 *
	 * @param input - Input PDF file path
	 * @param mode - Validation mode: 'strict' for rigorous validation, 'relaxed' for lenient validation
	 * @returns Promise resolving to ValidateResult indicating validation status
	 *
	 * @example
	 * ```typescript
	 * // Validate in strict mode
	 * const result = await pdf.validate('document.pdf', 'strict');
	 * if (result.success) {
	 *   console.log('PDF passes strict validation');
	 * } else {
	 *   console.error('Validation failed:', result.error);
	 * }
	 * ```
	 */
	validate(input: string, mode?: "strict" | "relaxed"): Promise<ValidateResult>;
	/**
	 * Optimizes a PDF document to reduce file size
	 *
	 * This method provides extensive overloading to support various input/output combinations:
	 * - File to Buffer: Returns optimized PDF as Buffer
	 * - File to File: Saves optimized PDF to specified path
	 * - Buffer to Buffer: Processes Buffer input and returns Buffer output
	 * - Buffer to File: Processes Buffer input and saves to file
	 *
	 * @param input - Input PDF file path or Buffer
	 * @returns Promise resolving to Buffer containing optimized PDF
	 *
	 * @example
	 * ```typescript
	 * // Optimize file and get Buffer
	 * const optimizedBuffer = await pdf.optimize('large.pdf');
	 *
	 * // Optimize buffer and get Buffer
	 * const optimizedBuffer = await pdf.optimize(inputBuffer);
	 * ```
	 */
	optimize(input: string): Promise<Buffer>;
	/**
	 * Optimizes a PDF document and saves to file
	 *
	 * @param input - Input PDF file path
	 * @param output - Output file path for optimized PDF
	 * @returns Promise resolving to OptimizeResult indicating success/failure
	 *
	 * @example
	 * ```typescript
	 * const result = await pdf.optimize('large.pdf', 'optimized.pdf');
	 * if (result.success) {
	 *   console.log('Optimization successful');
	 * } else {
	 *   console.error('Optimization failed:', result.error);
	 * }
	 * ```
	 */
	optimize(input: string, output: string): Promise<OptimizeResult>;
	/**
	 * Optimizes a PDF document using options object and saves to file
	 *
	 * @param input - Input PDF file path
	 * @param options - Optimization options containing output path
	 * @returns Promise resolving to OptimizeResult indicating success/failure
	 */
	optimize(input: string, options: {
		output: string;
	}): Promise<OptimizeResult>;
	/**
	 * Optimizes a PDF Buffer
	 *
	 * @param input - Input PDF Buffer
	 * @returns Promise resolving to Buffer containing optimized PDF
	 */
	optimize(input: Buffer): Promise<Buffer>;
	/**
	 * Optimizes a PDF Buffer and saves to file
	 *
	 * @param input - Input PDF Buffer
	 * @param output - Output file path for optimized PDF
	 * @returns Promise resolving to OptimizeResult indicating success/failure
	 */
	optimize(input: Buffer, output: string): Promise<OptimizeResult>;
	/**
	 * Optimizes a PDF Buffer using options object and saves to file
	 *
	 * @param input - Input PDF Buffer
	 * @param options - Optimization options containing output path
	 * @returns Promise resolving to OptimizeResult indicating success/failure
	 */
	optimize(input: Buffer, options: {
		output: string;
	}): Promise<OptimizeResult>;
	/**
	 * Adds a text watermark to a PDF document
	 *
	 * This method provides extensive overloading to support various input/output combinations:
	 * - File to Buffer: Returns watermarked PDF as Buffer
	 * - File to File: Saves watermarked PDF to specified path
	 * - Buffer to Buffer: Processes Buffer input and returns Buffer output
	 * - Buffer to File: Processes Buffer input and saves to file
	 *
	 * @param input - Input PDF file path or Buffer
	 * @param text - Watermark text to add
	 * @returns Promise resolving to Buffer containing watermarked PDF
	 *
	 * @example
	 * ```typescript
	 * // Add watermark to file and get Buffer
	 * const watermarkedBuffer = await pdf.watermark('input.pdf', 'CONFIDENTIAL');
	 *
	 * // Add watermark to buffer and get Buffer
	 * const watermarkedBuffer = await pdf.watermark(inputBuffer, 'DRAFT');
	 * ```
	 */
	watermark(input: string, text: string): Promise<Buffer>;
	/**
	 * Adds a watermark to a PDF document using options object
	 *
	 * @param input - Input PDF file path or Buffer
	 * @param options - Watermark options containing text, position, opacity, etc.
	 * @returns Promise resolving to Buffer containing watermarked PDF
	 *
	 * @example
	 * ```typescript
	 * const buffer = await pdf.watermark('input.pdf', {
	 *   text: 'CONFIDENTIAL',
	 *   pageRange: '1-5',
	 *   opacity: 0.5
	 * });
	 * ```
	 */
	watermark(input: string, options: WatermarkOptions): Promise<Buffer>;
	/**
	 * Adds a text watermark to a PDF document and saves to file
	 *
	 * @param input - Input PDF file path
	 * @param text - Watermark text to add
	 * @param output - Output file path for watermarked PDF
	 * @returns Promise resolving to WatermarkResult indicating success/failure
	 *
	 * @example
	 * ```typescript
	 * const result = await pdf.watermark('input.pdf', 'CONFIDENTIAL', 'watermarked.pdf');
	 * if (result.success) {
	 *   console.log('Watermark added successfully');
	 * } else {
	 *   console.error('Watermark failed:', result.error);
	 * }
	 * ```
	 */
	watermark(input: string, text: string, output: string): Promise<WatermarkResult>;
	/**
	 * Adds a text watermark to specific pages and saves to file
	 *
	 * @param input - Input PDF file path
	 * @param text - Watermark text to add
	 * @param pageRange - Page range string (e.g., "1-5,10")
	 * @param output - Output file path for watermarked PDF
	 * @returns Promise resolving to WatermarkResult indicating success/failure
	 */
	watermark(input: string, text: string, pageRange: string, output: string): Promise<WatermarkResult>;
	/**
	 * Adds a watermark to a PDF document using options object and saves to file
	 *
	 * @param input - Input PDF file path
	 * @param options - Watermark options containing text, page range, output path, etc.
	 * @returns Promise resolving to WatermarkResult indicating success/failure
	 */
	watermark(input: string, options: WatermarkOptions & {
		output: string;
	}): Promise<WatermarkResult>;
	/**
	 * Adds a text watermark to a PDF Buffer
	 *
	 * @param input - Input PDF Buffer
	 * @param text - Watermark text to add
	 * @returns Promise resolving to Buffer containing watermarked PDF
	 */
	watermark(input: Buffer, text: string): Promise<Buffer>;
	/**
	 * Adds a watermark to a PDF Buffer using options object
	 *
	 * @param input - Input PDF Buffer
	 * @param options - Watermark options containing text, position, opacity, etc.
	 * @returns Promise resolving to Buffer containing watermarked PDF
	 */
	watermark(input: Buffer, options: WatermarkOptions): Promise<Buffer>;
	/**
	 * Adds a text watermark to a PDF Buffer and saves to file
	 *
	 * @param input - Input PDF Buffer
	 * @param text - Watermark text to add
	 * @param output - Output file path for watermarked PDF
	 * @returns Promise resolving to WatermarkResult indicating success/failure
	 */
	watermark(input: Buffer, text: string, output: string): Promise<WatermarkResult>;
	/**
	 * Adds a text watermark to specific pages in a PDF Buffer and saves to file
	 *
	 * @param input - Input PDF Buffer
	 * @param text - Watermark text to add
	 * @param pageRange - Page range string (e.g., "1-5,10")
	 * @param output - Output file path for watermarked PDF
	 * @returns Promise resolving to WatermarkResult indicating success/failure
	 */
	watermark(input: Buffer, text: string, pageRange: string, output: string): Promise<WatermarkResult>;
	/**
	 * Adds a watermark to a PDF Buffer using options object and saves to file
	 *
	 * @param input - Input PDF Buffer
	 * @param options - Watermark options containing text, page range, output path, etc.
	 * @returns Promise resolving to WatermarkResult indicating success/failure
	 */
	watermark(input: Buffer, options: WatermarkOptions & {
		output: string;
	}): Promise<WatermarkResult>;
	/**
	 * Removes watermarks from a PDF document.
	 *
	 * This method provides multiple overloads to handle different input/output combinations:
	 * - File to Buffer: Reads from file path, returns processed PDF as Buffer
	 * - File to File: Reads from file path, writes to output file path
	 * - Buffer to Buffer: Processes PDF Buffer, returns processed PDF as Buffer
	 * - Buffer to File: Processes PDF Buffer, writes to output file path
	 *
	 * @param input - File path to the input PDF or PDF Buffer
	 * @param options - Optional configuration for watermark removal
	 * @returns Promise<Buffer> when no output path specified, Promise<RemoveWatermarksResult> when output path specified
	 *
	 * @example
	 * ```typescript
	 * // File to Buffer
	 * const processedPdf = await yqPdf.removeWatermarks('input.pdf');
	 *
	 * // File to File with page range
	 * const result = await yqPdf.removeWatermarks('input.pdf', {
	 *   output: 'output.pdf',
	 *   pageRange: '1-10'
	 * });
	 *
	 * // Buffer to Buffer
	 * const processedPdf = await yqPdf.removeWatermarks(pdfBuffer);
	 * ```
	 */
	removeWatermarks(input: string, options?: RemoveWatermarksOptions): Promise<Buffer>;
	/**
	 * Removes watermarks from a PDF document and saves to a file.
	 *
	 * @param input - File path to the input PDF
	 * @param options - Configuration including output path and optional page range
	 * @returns Promise<RemoveWatermarksResult> with success/error status
	 *
	 * @example
	 * ```typescript
	 * const result = await yqPdf.removeWatermarks('input.pdf', {
	 *   output: 'cleaned.pdf',
	 *   pageRange: '1-5'
	 * });
	 *
	 * if (result.success) {
	 *   console.log('Watermarks removed successfully');
	 * } else {
	 *   console.error('Error:', result.error);
	 * }
	 * ```
	 */
	removeWatermarks(input: string, options: RemoveWatermarksOptions & {
		output: string;
	}): Promise<RemoveWatermarksResult>;
	/**
	 * Removes watermarks from a PDF Buffer.
	 *
	 * @param input - PDF data as Buffer
	 * @param options - Optional configuration for watermark removal
	 * @returns Promise<Buffer> containing the processed PDF data
	 *
	 * @example
	 * ```typescript
	 * const pdfBuffer = fs.readFileSync('input.pdf');
	 * const cleanedPdf = await yqPdf.removeWatermarks(pdfBuffer, {
	 *   pageRange: '1-3'
	 * });
	 * ```
	 */
	removeWatermarks(input: Buffer, options?: RemoveWatermarksOptions): Promise<Buffer>;
	/**
	 * Removes watermarks from a PDF Buffer and saves to a file.
	 *
	 * @param input - PDF data as Buffer
	 * @param options - Configuration including output path and optional page range
	 * @returns Promise<RemoveWatermarksResult> with success/error status
	 *
	 * @example
	 * ```typescript
	 * const pdfBuffer = fs.readFileSync('input.pdf');
	 * const result = await yqPdf.removeWatermarks(pdfBuffer, {
	 *   output: 'cleaned.pdf',
	 *   pageRange: '2-4'
	 * });
	 * ```
	 */
	removeWatermarks(input: Buffer, options: RemoveWatermarksOptions & {
		output: string;
	}): Promise<RemoveWatermarksResult>;
	/**
	 * Extracts images from a PDF document to a specified directory.
	 *
	 * @param input - File path to the input PDF
	 * @param outputDir - Directory path where extracted images will be saved
	 * @param options - Optional configuration for image extraction
	 * @returns Promise<ExtractImagesResult> with success/error status and extracted image information
	 *
	 * @example
	 * ```typescript
	 * const result = await yqPdf.extractImages('document.pdf', './images', {
	 *   pageRange: '1-5'
	 * });
	 *
	 * if (result.success) {
	 *   console.log('Images extracted successfully');
	 * } else {
	 *   console.error('Error:', result.error);
	 * }
	 * ```
	 */
	extractImages(input: string, outputDir: string, options?: ExtractImagesOptions): Promise<ExtractImagesResult>;
	/**
	 * Extracts images from a PDF document with a specific page range.
	 *
	 * @param input - File path to the input PDF
	 * @param outputDir - Directory path where extracted images will be saved
	 * @param pageRange - Page range specification (e.g., '1-5', '2,4,6', '1-')
	 * @returns Promise<ExtractImagesResult> with success/error status and extracted image information
	 *
	 * @example
	 * ```typescript
	 * // Extract images from pages 1-3
	 * const result = await yqPdf.extractImages('document.pdf', './images', '1-3');
	 *
	 * // Extract images from specific pages
	 * const result2 = await yqPdf.extractImages('document.pdf', './images', '1,3,5');
	 * ```
	 */
	extractImages(input: string, outputDir: string, pageRange?: string): Promise<ExtractImagesResult>;
	/**
	 * Extracts fonts from a PDF document to a specified directory.
	 *
	 * @param input - File path to the input PDF
	 * @param outputDir - Directory path where extracted fonts will be saved
	 * @param options - Optional configuration for font extraction
	 * @returns Promise<ExtractFontsResult> with success/error status and extracted font information
	 *
	 * @example
	 * ```typescript
	 * const result = await yqPdf.extractFonts('document.pdf', './fonts', {
	 *   pageRange: '1-10'
	 * });
	 *
	 * if (result.success) {
	 *   console.log('Fonts extracted successfully');
	 * } else {
	 *   console.error('Error:', result.error);
	 * }
	 * ```
	 */
	extractFonts(input: string, outputDir: string, options?: ExtractFontsOptions): Promise<ExtractFontsResult>;
	/**
	 * Extracts fonts from a PDF document with a specific page range.
	 *
	 * @param input - File path to the input PDF
	 * @param outputDir - Directory path where extracted fonts will be saved
	 * @param pageRange - Page range specification (e.g., '1-5', '2,4,6', '1-')
	 * @returns Promise<ExtractFontsResult> with success/error status and extracted font information
	 *
	 * @example
	 * ```typescript
	 * // Extract fonts from pages 1-5
	 * const result = await yqPdf.extractFonts('document.pdf', './fonts', '1-5');
	 *
	 * // Extract fonts from all pages
	 * const result2 = await yqPdf.extractFonts('document.pdf', './fonts', '1-');
	 * ```
	 */
	extractFonts(input: string, outputDir: string, pageRange?: string): Promise<ExtractFontsResult>;
	/**
	 * Extracts all attachments from a PDF document to a specified directory.
	 *
	 * @param input - File path to the input PDF
	 * @param outputDir - Directory path where extracted attachments will be saved
	 * @returns Promise<ExtractAttachmentsResult> with success/error status and extracted attachment information
	 *
	 * @example
	 * ```typescript
	 * const result = await yqPdf.extractAttachments('document.pdf', './attachments');
	 *
	 * if (result.success) {
	 *   console.log('Attachments extracted successfully');
	 * } else {
	 *   console.error('Error:', result.error);
	 * }
	 * ```
	 */
	extractAttachments(input: string, outputDir: string): Promise<ExtractAttachmentsResult>;
	/**
	 * Adds attachments to a PDF document.
	 *
	 * This method provides multiple overloads to handle different input/output combinations:
	 * - File to Buffer: Reads from file path, returns processed PDF as Buffer
	 * - File to File: Reads from file path, writes to output file path
	 * - Buffer to Buffer: Processes PDF Buffer, returns processed PDF as Buffer
	 * - Buffer to File: Processes PDF Buffer, writes to output file path
	 *
	 * @param input - File path to the input PDF
	 * @param attachmentPaths - Attachment file paths (spread syntax)
	 * @returns Promise<Buffer> containing the PDF with added attachments
	 *
	 * @example
	 * ```typescript
	 * // Add multiple attachments using spread syntax
	 * const pdfWithAttachments = await yqPdf.addAttachments(
	 *   'document.pdf',
	 *   'file1.txt',
	 *   'file2.pdf',
	 *   'image.jpg'
	 * );
	 * ```
	 */
	addAttachments(input: string, ...attachmentPaths: string[]): Promise<Buffer>;
	/**
	 * Adds attachments to a PDF document from an array of file paths.
	 *
	 * @param input - File path to the input PDF
	 * @param attachmentPaths - Array of attachment file paths
	 * @returns Promise<Buffer> containing the PDF with added attachments
	 *
	 * @example
	 * ```typescript
	 * const attachments = ['file1.txt', 'file2.pdf', 'image.jpg'];
	 * const pdfWithAttachments = await yqPdf.addAttachments('document.pdf', attachments);
	 * ```
	 */
	addAttachments(input: string, attachmentPaths: string[]): Promise<Buffer>;
	/**
	 * Adds attachments to a PDF document and saves to a file.
	 *
	 * @param input - File path to the input PDF
	 * @param output - Output file path
	 * @param attachmentPaths - Attachment file paths (spread syntax)
	 * @returns Promise<AddAttachmentsResult> with success/error status
	 *
	 * @example
	 * ```typescript
	 * const result = await yqPdf.addAttachments(
	 *   'document.pdf',
	 *   'output.pdf',
	 *   'file1.txt',
	 *   'file2.pdf'
	 * );
	 * ```
	 */
	addAttachments(input: string, output: string, ...attachmentPaths: string[]): Promise<AddAttachmentsResult>;
	/**
	 * Adds attachments to a PDF document and saves to a file.
	 *
	 * @param input - File path to the input PDF
	 * @param output - Output file path
	 * @param attachmentPaths - Array of attachment file paths
	 * @returns Promise<AddAttachmentsResult> with success/error status
	 *
	 * @example
	 * ```typescript
	 * const attachments = ['file1.txt', 'file2.pdf'];
	 * const result = await yqPdf.addAttachments('document.pdf', 'output.pdf', attachments);
	 * ```
	 */
	addAttachments(input: string, output: string, attachmentPaths: string[]): Promise<AddAttachmentsResult>;
	/**
	 * Adds attachments to a PDF document using options object.
	 *
	 * @param input - File path to the input PDF
	 * @param options - Configuration object with output path
	 * @param attachmentPaths - Attachment file paths (spread syntax)
	 * @returns Promise<AddAttachmentsResult> with success/error status
	 *
	 * @example
	 * ```typescript
	 * const result = await yqPdf.addAttachments(
	 *   'document.pdf',
	 *   { output: 'output.pdf' },
	 *   'file1.txt',
	 *   'file2.pdf'
	 * );
	 * ```
	 */
	addAttachments(input: string, options: {
		output: string;
	}, ...attachmentPaths: string[]): Promise<AddAttachmentsResult>;
	/**
	 * Adds attachments to a PDF document using options object.
	 *
	 * @param input - File path to the input PDF
	 * @param options - Configuration object with output path
	 * @param attachmentPaths - Array of attachment file paths
	 * @returns Promise<AddAttachmentsResult> with success/error status
	 *
	 * @example
	 * ```typescript
	 * const attachments = ['file1.txt', 'file2.pdf'];
	 * const result = await yqPdf.addAttachments(
	 *   'document.pdf',
	 *   { output: 'output.pdf' },
	 *   attachments
	 * );
	 * ```
	 */
	addAttachments(input: string, options: {
		output: string;
	}, attachmentPaths: string[]): Promise<AddAttachmentsResult>;
	/**
	 * Adds attachments to a PDF Buffer.
	 *
	 * @param input - PDF data as Buffer
	 * @param attachmentPaths - Attachment file paths (spread syntax)
	 * @returns Promise<Buffer> containing the PDF with added attachments
	 *
	 * @example
	 * ```typescript
	 * const pdfBuffer = fs.readFileSync('document.pdf');
	 * const pdfWithAttachments = await yqPdf.addAttachments(
	 *   pdfBuffer,
	 *   'file1.txt',
	 *   'file2.pdf'
	 * );
	 * ```
	 */
	addAttachments(input: Buffer, ...attachmentPaths: string[]): Promise<Buffer>;
	/**
	 * Adds attachments to a PDF Buffer from an array of file paths.
	 *
	 * @param input - PDF data as Buffer
	 * @param attachmentPaths - Array of attachment file paths
	 * @returns Promise<Buffer> containing the PDF with added attachments
	 *
	 * @example
	 * ```typescript
	 * const pdfBuffer = fs.readFileSync('document.pdf');
	 * const attachments = ['file1.txt', 'file2.pdf'];
	 * const pdfWithAttachments = await yqPdf.addAttachments(pdfBuffer, attachments);
	 * ```
	 */
	addAttachments(input: Buffer, attachmentPaths: string[]): Promise<Buffer>;
	/**
	 * Adds attachments to a PDF Buffer and saves to a file.
	 *
	 * @param input - PDF data as Buffer
	 * @param output - Output file path
	 * @param attachmentPaths - Attachment file paths (spread syntax)
	 * @returns Promise<AddAttachmentsResult> with success/error status
	 *
	 * @example
	 * ```typescript
	 * const pdfBuffer = fs.readFileSync('document.pdf');
	 * const result = await yqPdf.addAttachments(
	 *   pdfBuffer,
	 *   'output.pdf',
	 *   'file1.txt',
	 *   'file2.pdf'
	 * );
	 * ```
	 */
	addAttachments(input: Buffer, output: string, ...attachmentPaths: string[]): Promise<AddAttachmentsResult>;
	/**
	 * Adds attachments to a PDF Buffer and saves to a file.
	 *
	 * @param input - PDF data as Buffer
	 * @param output - Output file path
	 * @param attachmentPaths - Array of attachment file paths
	 * @returns Promise<AddAttachmentsResult> with success/error status
	 *
	 * @example
	 * ```typescript
	 * const pdfBuffer = fs.readFileSync('document.pdf');
	 * const attachments = ['file1.txt', 'file2.pdf'];
	 * const result = await yqPdf.addAttachments(pdfBuffer, 'output.pdf', attachments);
	 * ```
	 */
	addAttachments(input: Buffer, output: string, attachmentPaths: string[]): Promise<AddAttachmentsResult>;
	/**
	 * Adds attachments to a PDF Buffer using options object.
	 *
	 * @param input - PDF data as Buffer
	 * @param options - Configuration object with output path
	 * @param attachmentPaths - Attachment file paths (spread syntax)
	 * @returns Promise<AddAttachmentsResult> with success/error status
	 *
	 * @example
	 * ```typescript
	 * const pdfBuffer = fs.readFileSync('document.pdf');
	 * const result = await yqPdf.addAttachments(
	 *   pdfBuffer,
	 *   { output: 'output.pdf' },
	 *   'file1.txt',
	 *   'file2.pdf'
	 * );
	 * ```
	 */
	addAttachments(input: Buffer, options: {
		output: string;
	}, ...attachmentPaths: string[]): Promise<AddAttachmentsResult>;
	/**
	 * Adds attachments to a PDF Buffer using options object.
	 *
	 * @param input - PDF data as Buffer
	 * @param options - Configuration object with output path
	 * @param attachmentPaths - Array of attachment file paths
	 * @returns Promise<AddAttachmentsResult> with success/error status
	 *
	 * @example
	 * ```typescript
	 * const pdfBuffer = fs.readFileSync('document.pdf');
	 * const attachments = ['file1.txt', 'file2.pdf'];
	 * const result = await yqPdf.addAttachments(
	 *   pdfBuffer,
	 *   { output: 'output.pdf' },
	 *   attachments
	 * );
	 * ```
	 */
	addAttachments(input: Buffer, options: {
		output: string;
	}, attachmentPaths: string[]): Promise<AddAttachmentsResult>;
	/**
	 * Removes attachments from a PDF document.
	 *
	 * This method provides multiple overloads to handle different input/output combinations:
	 * - File to Buffer: Reads from file path, returns processed PDF as Buffer
	 * - File to File: Reads from file path, writes to output file path
	 * - Buffer to Buffer: Processes PDF Buffer, returns processed PDF as Buffer
	 * - Buffer to File: Processes PDF Buffer, writes to output file path
	 *
	 * @param input - File path to the input PDF
	 * @param fileNames - Optional array of specific attachment file names to remove (if not provided, removes all attachments)
	 * @returns Promise<Buffer> containing the PDF with attachments removed
	 *
	 * @example
	 * ```typescript
	 * // Remove all attachments
	 * const pdfWithoutAttachments = await yqPdf.removeAttachments('document.pdf');
	 *
	 * // Remove specific attachments
	 * const pdfWithoutSpecific = await yqPdf.removeAttachments('document.pdf', ['file1.txt', 'image.jpg']);
	 * ```
	 */
	removeAttachments(input: string, fileNames?: string[]): Promise<Buffer>;
	/**
	 * Removes attachments from a PDF document and saves to a file.
	 *
	 * @param input - File path to the input PDF
	 * @param output - Output file path
	 * @param fileNames - Optional array of specific attachment file names to remove (if not provided, removes all attachments)
	 * @returns Promise<RemoveAttachmentsResult> with success/error status
	 *
	 * @example
	 * ```typescript
	 * // Remove all attachments and save to file
	 * const result = await yqPdf.removeAttachments('document.pdf', 'cleaned.pdf');
	 *
	 * // Remove specific attachments and save to file
	 * const result2 = await yqPdf.removeAttachments('document.pdf', 'cleaned.pdf', ['file1.txt']);
	 * ```
	 */
	removeAttachments(input: string, output: string, fileNames?: string[]): Promise<RemoveAttachmentsResult>;
	/**
	 * Removes attachments from a PDF document using options object.
	 *
	 * @param input - File path to the input PDF
	 * @param options - Configuration object with output path and optional file names
	 * @returns Promise<RemoveAttachmentsResult> with success/error status
	 *
	 * @example
	 * ```typescript
	 * const result = await yqPdf.removeAttachments('document.pdf', {
	 *   output: 'cleaned.pdf',
	 *   fileNames: ['file1.txt', 'file2.pdf']
	 * });
	 * ```
	 */
	removeAttachments(input: string, options: {
		output: string;
		fileNames?: string[];
	}): Promise<RemoveAttachmentsResult>;
	/**
	 * Removes attachments from a PDF Buffer.
	 *
	 * @param input - PDF data as Buffer
	 * @param fileNames - Optional array of specific attachment file names to remove (if not provided, removes all attachments)
	 * @returns Promise<Buffer> containing the PDF with attachments removed
	 *
	 * @example
	 * ```typescript
	 * const pdfBuffer = fs.readFileSync('document.pdf');
	 *
	 * // Remove all attachments
	 * const cleanedPdf = await yqPdf.removeAttachments(pdfBuffer);
	 *
	 * // Remove specific attachments
	 * const cleanedPdf2 = await yqPdf.removeAttachments(pdfBuffer, ['file1.txt']);
	 * ```
	 */
	removeAttachments(input: Buffer, fileNames?: string[]): Promise<Buffer>;
	/**
	 * Removes attachments from a PDF Buffer and saves to a file.
	 *
	 * @param input - PDF data as Buffer
	 * @param output - Output file path
	 * @param fileNames - Optional array of specific attachment file names to remove (if not provided, removes all attachments)
	 * @returns Promise<RemoveAttachmentsResult> with success/error status
	 *
	 * @example
	 * ```typescript
	 * const pdfBuffer = fs.readFileSync('document.pdf');
	 * const result = await yqPdf.removeAttachments(pdfBuffer, 'cleaned.pdf', ['file1.txt']);
	 * ```
	 */
	removeAttachments(input: Buffer, output: string, fileNames?: string[]): Promise<RemoveAttachmentsResult>;
	/**
	 * Removes attachments from a PDF Buffer using options object.
	 *
	 * @param input - PDF data as Buffer
	 * @param options - Configuration object with output path and optional file names
	 * @returns Promise<RemoveAttachmentsResult> with success/error status
	 *
	 * @example
	 * ```typescript
	 * const pdfBuffer = fs.readFileSync('document.pdf');
	 * const result = await yqPdf.removeAttachments(pdfBuffer, {
	 *   output: 'cleaned.pdf',
	 *   fileNames: ['file1.txt', 'file2.pdf']
	 * });
	 * ```
	 */
	removeAttachments(input: Buffer, options: {
		output: string;
		fileNames?: string[];
	}): Promise<RemoveAttachmentsResult>;
	/**
	 * Sets metadata for a PDF document.
	 *
	 * This method provides multiple overloads to handle different input/output combinations:
	 * - File to Buffer: Reads from file path, returns processed PDF as Buffer
	 * - File to File: Reads from file path, writes to output file path
	 * - Buffer to Buffer: Processes PDF Buffer, returns processed PDF as Buffer
	 * - Buffer to File: Processes PDF Buffer, writes to output file path
	 *
	 * @param input - File path to the input PDF
	 * @param options - Metadata configuration object
	 * @returns Promise<Buffer> containing the PDF with updated metadata
	 *
	 * @example
	 * ```typescript
	 * const pdfWithMetadata = await yqPdf.setMetadata('document.pdf', {
	 *   title: 'My Document',
	 *   author: 'John Doe',
	 *   subject: 'Important Document',
	 *   keywords: 'pdf, document, important',
	 *   creator: 'My App',
	 *   producer: 'yq-pdf'
	 * });
	 * ```
	 */
	setMetadata(input: string, options: MetadataOptions): Promise<Buffer>;
	/**
	 * Sets metadata for a PDF document using individual parameters.
	 *
	 * @param input - File path to the input PDF
	 * @param title - Document title
	 * @param author - Optional document author
	 * @param subject - Optional document subject
	 * @returns Promise<Buffer> containing the PDF with updated metadata
	 *
	 * @example
	 * ```typescript
	 * const pdfWithMetadata = await yqPdf.setMetadata(
	 *   'document.pdf',
	 *   'My Document',
	 *   'John Doe',
	 *   'Important Document'
	 * );
	 * ```
	 */
	setMetadata(input: string, title: string, author?: string, subject?: string): Promise<Buffer>;
	/**
	 * Sets metadata for a PDF document and saves to a file.
	 *
	 * @param input - File path to the input PDF
	 * @param output - Output file path
	 * @param options - Metadata configuration object
	 * @returns Promise<SetMetadataResult> with success/error status
	 *
	 * @example
	 * ```typescript
	 * const result = await yqPdf.setMetadata('document.pdf', 'output.pdf', {
	 *   title: 'My Document',
	 *   author: 'John Doe',
	 *   subject: 'Important Document'
	 * });
	 * ```
	 */
	setMetadata(input: string, output: string, options: MetadataOptions): Promise<SetMetadataResult>;
	/**
	 * Sets metadata for a PDF document using individual parameters and saves to a file.
	 *
	 * @param input - File path to the input PDF
	 * @param output - Output file path
	 * @param title - Document title
	 * @param author - Optional document author
	 * @param subject - Optional document subject
	 * @returns Promise<SetMetadataResult> with success/error status
	 *
	 * @example
	 * ```typescript
	 * const result = await yqPdf.setMetadata(
	 *   'document.pdf',
	 *   'output.pdf',
	 *   'My Document',
	 *   'John Doe',
	 *   'Important Document'
	 * );
	 * ```
	 */
	setMetadata(input: string, output: string, title: string, author?: string, subject?: string): Promise<SetMetadataResult>;
	/**
	 * Sets metadata for a PDF Buffer.
	 *
	 * @param input - PDF data as Buffer
	 * @param options - Metadata configuration object
	 * @returns Promise<Buffer> containing the PDF with updated metadata
	 *
	 * @example
	 * ```typescript
	 * const pdfBuffer = fs.readFileSync('document.pdf');
	 * const pdfWithMetadata = await yqPdf.setMetadata(pdfBuffer, {
	 *   title: 'My Document',
	 *   author: 'John Doe'
	 * });
	 * ```
	 */
	setMetadata(input: Buffer, options: MetadataOptions): Promise<Buffer>;
	/**
	 * Sets metadata for a PDF Buffer using individual parameters.
	 *
	 * @param input - PDF data as Buffer
	 * @param title - Document title
	 * @param author - Optional document author
	 * @param subject - Optional document subject
	 * @returns Promise<Buffer> containing the PDF with updated metadata
	 *
	 * @example
	 * ```typescript
	 * const pdfBuffer = fs.readFileSync('document.pdf');
	 * const pdfWithMetadata = await yqPdf.setMetadata(
	 *   pdfBuffer,
	 *   'My Document',
	 *   'John Doe',
	 *   'Important Document'
	 * );
	 * ```
	 */
	setMetadata(input: Buffer, title: string, author?: string, subject?: string): Promise<Buffer>;
	/**
	 * Sets metadata for a PDF Buffer and saves to a file.
	 *
	 * @param input - PDF data as Buffer
	 * @param output - Output file path
	 * @param options - Metadata configuration object
	 * @returns Promise<SetMetadataResult> with success/error status
	 *
	 * @example
	 * ```typescript
	 * const pdfBuffer = fs.readFileSync('document.pdf');
	 * const result = await yqPdf.setMetadata(pdfBuffer, 'output.pdf', {
	 *   title: 'My Document',
	 *   author: 'John Doe'
	 * });
	 * ```
	 */
	setMetadata(input: Buffer, output: string, options: MetadataOptions): Promise<SetMetadataResult>;
	/**
	 * Sets metadata for a PDF Buffer using individual parameters and saves to a file.
	 *
	 * @param input - PDF data as Buffer
	 * @param output - Output file path
	 * @param title - Document title
	 * @param author - Optional document author
	 * @param subject - Optional document subject
	 * @returns Promise<SetMetadataResult> with success/error status
	 *
	 * @example
	 * ```typescript
	 * const pdfBuffer = fs.readFileSync('document.pdf');
	 * const result = await yqPdf.setMetadata(
	 *   pdfBuffer,
	 *   'output.pdf',
	 *   'My Document',
	 *   'John Doe',
	 *   'Important Document'
	 * );
	 * ```
	 */
	setMetadata(input: Buffer, output: string, title: string, author?: string, subject?: string): Promise<SetMetadataResult>;
	/**
	 * Retrieves properties and metadata information from a PDF document.
	 *
	 * @param input - File path to the input PDF
	 * @returns Promise<PropertiesResult> with PDF properties and metadata information
	 *
	 * @example
	 * ```typescript
	 * const result = await yqPdf.properties('document.pdf');
	 *
	 * if (result.success) {
	 *   console.log('PDF properties retrieved successfully');
	 *   // Access properties data from result
	 * } else {
	 *   console.error('Error:', result.error);
	 * }
	 * ```
	 */
	properties(input: string): Promise<PropertiesResult>;
	/**
	 * Dumps the content of a specific PDF object by its ID.
	 *
	 * @param input - File path to the input PDF
	 * @param objectId - The ID of the PDF object to dump
	 * @returns Promise<DumpResult> with the dumped object content
	 *
	 * @example
	 * ```typescript
	 * const result = await yqPdf.dump('document.pdf', '1');
	 *
	 * if (result.success) {
	 *   console.log('Object dumped successfully');
	 *   // Access dumped object data from result
	 * } else {
	 *   console.error('Error:', result.error);
	 * }
	 * ```
	 */
	dump(input: string, objectId: string): Promise<DumpResult>;
	/**
	 * Lists the page layout settings of a PDF document.
	 *
	 * @param input - File path to the input PDF
	 * @returns Promise<ListPageLayoutResult> with page layout information
	 *
	 * @example
	 * ```typescript
	 * const result = await yqPdf.listPageLayout('document.pdf');
	 *
	 * if (result.success) {
	 *   console.log('Page layout retrieved successfully');
	 *   // Access page layout data from result
	 * } else {
	 *   console.error('Error:', result.error);
	 * }
	 * ```
	 */
	listPageLayout(input: string): Promise<ListPageLayoutResult>;
	/**
	 * Lists the page mode settings of a PDF document.
	 *
	 * @param input - File path to the input PDF
	 * @returns Promise<ListPageModeResult> with page mode information
	 *
	 * @example
	 * ```typescript
	 * const result = await yqPdf.listPageMode('document.pdf');
	 *
	 * if (result.success) {
	 *   console.log('Page mode retrieved successfully');
	 *   // Access page mode data from result
	 * } else {
	 *   console.error('Error:', result.error);
	 * }
	 * ```
	 */
	listPageMode(input: string): Promise<ListPageModeResult>;
	/**
	 * Resizes pages in a PDF document using ResizeOptions.
	 *
	 * @param input - File path to the input PDF
	 * @param output - File path for the output PDF
	 * @param options - Resize options including width, height, and optional page range
	 * @returns Promise<ResizeResult> with operation result
	 *
	 * @example
	 * ```typescript
	 * const result = await yqPdf.resize('input.pdf', 'output.pdf', {
	 *   width: 612,
	 *   height: 792,
	 *   pageRange: '1-5'
	 * });
	 * ```
	 */
	resize(input: string, output: string, options: ResizeOptions): Promise<ResizeResult>;
	/**
	 * Resizes pages in a PDF document with specific width and height.
	 *
	 * @param input - File path to the input PDF
	 * @param output - File path for the output PDF
	 * @param width - New width for the pages
	 * @param height - New height for the pages
	 * @returns Promise<ResizeResult> with operation result
	 *
	 * @example
	 * ```typescript
	 * const result = await yqPdf.resize('input.pdf', 'output.pdf', 612, 792);
	 * ```
	 */
	resize(input: string, output: string, width: number, height: number): Promise<ResizeResult>;
	/**
	 * Resizes specific pages in a PDF document with width, height, and page range.
	 *
	 * @param input - File path to the input PDF
	 * @param output - File path for the output PDF
	 * @param width - New width for the pages
	 * @param height - New height for the pages
	 * @param pageRange - Page range to resize (e.g., '1-5', '2,4,6')
	 * @returns Promise<ResizeResult> with operation result
	 *
	 * @example
	 * ```typescript
	 * const result = await yqPdf.resize('input.pdf', 'output.pdf', 612, 792, '1-3');
	 * ```
	 */
	resize(input: string, output: string, width: number, height: number, pageRange: string): Promise<ResizeResult>;
	/**
	 * Resizes a PDF from file to buffer with specific width and height.
	 *
	 * @param input - File path to the input PDF
	 * @param width - New width for the pages
	 * @param height - New height for the pages
	 * @param options - Optional resize options including page range
	 * @returns Promise<Buffer> containing the resized PDF data
	 *
	 * @example
	 * ```typescript
	 * const buffer = await yqPdf.resizePDF('input.pdf', 612, 792, { pageRange: '1-3' });
	 * ```
	 */
	resizePDF(input: string, width: number, height: number, options?: ResizeOptions): Promise<Buffer>;
	/**
	 * Resizes a PDF from file to buffer using ResizeOptions.
	 *
	 * @param input - File path to the input PDF
	 * @param options - Resize options including width, height, and optional page range
	 * @returns Promise<Buffer> containing the resized PDF data
	 *
	 * @example
	 * ```typescript
	 * const buffer = await yqPdf.resizePDF('input.pdf', {
	 *   width: 612,
	 *   height: 792,
	 *   pageRange: '1-5'
	 * });
	 * ```
	 */
	resizePDF(input: string, options: ResizeOptions): Promise<Buffer>;
	/**
	 * Resizes a PDF from file to file with specific width and height.
	 *
	 * @param input - File path to the input PDF
	 * @param width - New width for the pages
	 * @param height - New height for the pages
	 * @param options - Resize options including output path and optional page range
	 * @returns Promise<ResizeResult> with operation result
	 *
	 * @example
	 * ```typescript
	 * const result = await yqPdf.resizePDF('input.pdf', 612, 792, {
	 *   output: 'output.pdf',
	 *   pageRange: '1-3'
	 * });
	 * ```
	 */
	resizePDF(input: string, width: number, height: number, options: ResizeOptions & {
		output: string;
	}): Promise<ResizeResult>;
	/**
	 * Resizes a PDF from file to file using ResizeOptions.
	 *
	 * @param input - File path to the input PDF
	 * @param options - Resize options including width, height, output path, and optional page range
	 * @returns Promise<ResizeResult> with operation result
	 *
	 * @example
	 * ```typescript
	 * const result = await yqPdf.resizePDF('input.pdf', {
	 *   width: 612,
	 *   height: 792,
	 *   output: 'output.pdf',
	 *   pageRange: '1-5'
	 * });
	 * ```
	 */
	resizePDF(input: string, options: ResizeOptions & {
		output: string;
	}): Promise<ResizeResult>;
	/**
	 * Resizes a PDF from buffer to buffer with specific width and height.
	 *
	 * @param input - Buffer containing the input PDF data
	 * @param width - New width for the pages
	 * @param height - New height for the pages
	 * @param options - Optional resize options including page range
	 * @returns Promise<Buffer> containing the resized PDF data
	 *
	 * @example
	 * ```typescript
	 * const inputBuffer = fs.readFileSync('input.pdf');
	 * const resizedBuffer = await yqPdf.resizePDF(inputBuffer, 612, 792, { pageRange: '1-3' });
	 * ```
	 */
	resizePDF(input: Buffer, width: number, height: number, options?: ResizeOptions): Promise<Buffer>;
	/**
	 * Resizes a PDF from buffer to buffer using ResizeOptions.
	 *
	 * @param input - Buffer containing the input PDF data
	 * @param options - Resize options including width, height, and optional page range
	 * @returns Promise<Buffer> containing the resized PDF data
	 *
	 * @example
	 * ```typescript
	 * const inputBuffer = fs.readFileSync('input.pdf');
	 * const resizedBuffer = await yqPdf.resizePDF(inputBuffer, {
	 *   width: 612,
	 *   height: 792,
	 *   pageRange: '1-5'
	 * });
	 * ```
	 */
	resizePDF(input: Buffer, options: ResizeOptions): Promise<Buffer>;
	/**
	 * Resizes a PDF from buffer to file with specific width and height.
	 *
	 * @param input - Buffer containing the input PDF data
	 * @param width - New width for the pages
	 * @param height - New height for the pages
	 * @param options - Resize options including output path and optional page range
	 * @returns Promise<ResizeResult> with operation result
	 *
	 * @example
	 * ```typescript
	 * const inputBuffer = fs.readFileSync('input.pdf');
	 * const result = await yqPdf.resizePDF(inputBuffer, 612, 792, {
	 *   output: 'output.pdf',
	 *   pageRange: '1-3'
	 * });
	 * ```
	 */
	resizePDF(input: Buffer, width: number, height: number, options: ResizeOptions & {
		output: string;
	}): Promise<ResizeResult>;
	/**
	 * Resizes a PDF from buffer to file using ResizeOptions.
	 *
	 * @param input - Buffer containing the input PDF data
	 * @param options - Resize options including width, height, output path, and optional page range
	 * @returns Promise<ResizeResult> with operation result
	 *
	 * @example
	 * ```typescript
	 * const inputBuffer = fs.readFileSync('input.pdf');
	 * const result = await yqPdf.resizePDF(inputBuffer, {
	 *   width: 612,
	 *   height: 792,
	 *   output: 'output.pdf',
	 *   pageRange: '1-5'
	 * });
	 * ```
	 */
	resizePDF(input: Buffer, options: ResizeOptions & {
		output: string;
	}): Promise<ResizeResult>;
	/**
	 * Crops pages in a PDF document using CropOptions.
	 *
	 * @param input - File path to the input PDF
	 * @param output - File path for the output PDF
	 * @param options - Crop options including x, y, width, height, and optional page range
	 * @returns Promise<CropResult> with operation result
	 *
	 * @example
	 * ```typescript
	 * const result = await yqPdf.crop('input.pdf', 'output.pdf', {
	 *   x: 50,
	 *   y: 50,
	 *   width: 400,
	 *   height: 600,
	 *   pageRange: '1-5'
	 * });
	 * ```
	 */
	crop(input: string, output: string, options: CropOptions): Promise<CropResult>;
	/**
	 * Crops pages in a PDF document with specific coordinates and dimensions.
	 *
	 * @param input - File path to the input PDF
	 * @param output - File path for the output PDF
	 * @param x - X coordinate for the crop area
	 * @param y - Y coordinate for the crop area
	 * @param width - Width of the crop area
	 * @param height - Height of the crop area
	 * @returns Promise<CropResult> with operation result
	 *
	 * @example
	 * ```typescript
	 * const result = await yqPdf.crop('input.pdf', 'output.pdf', 50, 50, 400, 600);
	 * ```
	 */
	crop(input: string, output: string, x: number, y: number, width: number, height: number): Promise<CropResult>;
	/**
	 * Crops specific pages in a PDF document with coordinates, dimensions, and page range.
	 *
	 * @param input - File path to the input PDF
	 * @param output - File path for the output PDF
	 * @param x - X coordinate for the crop area
	 * @param y - Y coordinate for the crop area
	 * @param width - Width of the crop area
	 * @param height - Height of the crop area
	 * @param pageRange - Page range to crop (e.g., '1-5', '2,4,6')
	 * @returns Promise<CropResult> with operation result
	 *
	 * @example
	 * ```typescript
	 * const result = await yqPdf.crop('input.pdf', 'output.pdf', 50, 50, 400, 600, '1-3');
	 * ```
	 */
	crop(input: string, output: string, x: number, y: number, width: number, height: number, pageRange: string): Promise<CropResult>;
	/**
	 * Crops a PDF from file to buffer with specific coordinates and dimensions.
	 *
	 * @param input - File path to the input PDF
	 * @param x - X coordinate for the crop area
	 * @param y - Y coordinate for the crop area
	 * @param width - Width of the crop area
	 * @param height - Height of the crop area
	 * @param options - Optional crop options including page range
	 * @returns Promise<Buffer> containing the cropped PDF data
	 *
	 * @example
	 * ```typescript
	 * const buffer = await yqPdf.cropPDF('input.pdf', 50, 50, 400, 600, { pageRange: '1-3' });
	 * ```
	 */
	cropPDF(input: string, x: number, y: number, width: number, height: number, options?: CropOptions): Promise<Buffer>;
	/**
	 * Crops a PDF from file to buffer using CropOptions.
	 *
	 * @param input - File path to the input PDF
	 * @param options - Crop options including x, y, width, height, and optional page range
	 * @returns Promise<Buffer> containing the cropped PDF data
	 *
	 * @example
	 * ```typescript
	 * const buffer = await yqPdf.cropPDF('input.pdf', {
	 *   x: 50,
	 *   y: 50,
	 *   width: 400,
	 *   height: 600,
	 *   pageRange: '1-5'
	 * });
	 * ```
	 */
	cropPDF(input: string, options: CropOptions): Promise<Buffer>;
	/**
	 * Crops a PDF from file to file with specific coordinates and dimensions.
	 *
	 * @param input - File path to the input PDF
	 * @param x - X coordinate for the crop area
	 * @param y - Y coordinate for the crop area
	 * @param width - Width of the crop area
	 * @param height - Height of the crop area
	 * @param options - Crop options including output path and optional page range
	 * @returns Promise<CropResult> with operation result
	 *
	 * @example
	 * ```typescript
	 * const result = await yqPdf.cropPDF('input.pdf', 50, 50, 400, 600, {
	 *   output: 'output.pdf',
	 *   pageRange: '1-3'
	 * });
	 * ```
	 */
	cropPDF(input: string, x: number, y: number, width: number, height: number, options: CropOptions & {
		output: string;
	}): Promise<CropResult>;
	/**
	 * Crops a PDF from file to file using CropOptions.
	 *
	 * @param input - File path to the input PDF
	 * @param options - Crop options including x, y, width, height, output path, and optional page range
	 * @returns Promise<CropResult> with operation result
	 *
	 * @example
	 * ```typescript
	 * const result = await yqPdf.cropPDF('input.pdf', {
	 *   x: 50,
	 *   y: 50,
	 *   width: 400,
	 *   height: 600,
	 *   output: 'output.pdf',
	 *   pageRange: '1-5'
	 * });
	 * ```
	 */
	cropPDF(input: string, options: CropOptions & {
		output: string;
	}): Promise<CropResult>;
	/**
	 * Crops a PDF from buffer to buffer with specific coordinates and dimensions.
	 *
	 * @param input - Buffer containing the input PDF data
	 * @param x - X coordinate for the crop area
	 * @param y - Y coordinate for the crop area
	 * @param width - Width of the crop area
	 * @param height - Height of the crop area
	 * @param options - Optional crop options including page range
	 * @returns Promise<Buffer> containing the cropped PDF data
	 *
	 * @example
	 * ```typescript
	 * const inputBuffer = fs.readFileSync('input.pdf');
	 * const croppedBuffer = await yqPdf.cropPDF(inputBuffer, 50, 50, 400, 600, { pageRange: '1-3' });
	 * ```
	 */
	cropPDF(input: Buffer, x: number, y: number, width: number, height: number, options?: CropOptions): Promise<Buffer>;
	/**
	 * Crops a PDF from buffer to buffer using CropOptions.
	 *
	 * @param input - Buffer containing the input PDF data
	 * @param options - Crop options including x, y, width, height, and optional page range
	 * @returns Promise<Buffer> containing the cropped PDF data
	 *
	 * @example
	 * ```typescript
	 * const inputBuffer = fs.readFileSync('input.pdf');
	 * const croppedBuffer = await yqPdf.cropPDF(inputBuffer, {
	 *   x: 50,
	 *   y: 50,
	 *   width: 400,
	 *   height: 600,
	 *   pageRange: '1-5'
	 * });
	 * ```
	 */
	cropPDF(input: Buffer, options: CropOptions): Promise<Buffer>;
	/**
	 * Crops a PDF from buffer to file with specific coordinates and dimensions.
	 *
	 * @param input - Buffer containing the input PDF data
	 * @param x - X coordinate for the crop area
	 * @param y - Y coordinate for the crop area
	 * @param width - Width of the crop area
	 * @param height - Height of the crop area
	 * @param options - Crop options including output path and optional page range
	 * @returns Promise<CropResult> with operation result
	 *
	 * @example
	 * ```typescript
	 * const inputBuffer = fs.readFileSync('input.pdf');
	 * const result = await yqPdf.cropPDF(inputBuffer, 50, 50, 400, 600, {
	 *   output: 'output.pdf',
	 *   pageRange: '1-3'
	 * });
	 * ```
	 */
	cropPDF(input: Buffer, x: number, y: number, width: number, height: number, options: CropOptions & {
		output: string;
	}): Promise<CropResult>;
	/**
	 * Crops a PDF from buffer to file using CropOptions.
	 *
	 * @param input - Buffer containing the input PDF data
	 * @param options - Crop options including x, y, width, height, output path, and optional page range
	 * @returns Promise<CropResult> with operation result
	 *
	 * @example
	 * ```typescript
	 * const inputBuffer = fs.readFileSync('input.pdf');
	 * const result = await yqPdf.cropPDF(inputBuffer, {
	 *   x: 50,
	 *   y: 50,
	 *   width: 400,
	 *   height: 600,
	 *   output: 'output.pdf',
	 *   pageRange: '1-5'
	 * });
	 * ```
	 */
	cropPDF(input: Buffer, options: CropOptions & {
		output: string;
	}): Promise<CropResult>;
}
export declare const encryptPDF: {
	(input: string, userPassword: string): Promise<Buffer>;
	(input: string, userPassword: string, ownerPassword: string): Promise<Buffer>;
	(input: string, options: EncryptOptions): Promise<Buffer>;
	(input: string, userPassword: string, output: string): Promise<EncryptResult>;
	(input: string, userPassword: string, ownerPassword: string, output: string): Promise<EncryptResult>;
	(input: string, options: EncryptOptions & {
		output: string;
	}): Promise<EncryptResult>;
	(input: Buffer, userPassword: string): Promise<Buffer>;
	(input: Buffer, userPassword: string, ownerPassword: string): Promise<Buffer>;
	(input: Buffer, options: EncryptOptions): Promise<Buffer>;
	(input: Buffer, userPassword: string, output: string): Promise<EncryptResult>;
	(input: Buffer, userPassword: string, ownerPassword: string, output: string): Promise<EncryptResult>;
	(input: Buffer, options: EncryptOptions & {
		output: string;
	}): Promise<EncryptResult>;
};
export declare const decryptPDF: {
	(input: string, password: string): Promise<Buffer>;
	(input: string, options: DecryptOptions): Promise<Buffer>;
	(input: string, password: string, output: string): Promise<DecryptResult>;
	(input: string, options: DecryptOptions & {
		output: string;
	}): Promise<DecryptResult>;
	(input: Buffer, password: string): Promise<Buffer>;
	(input: Buffer, options: DecryptOptions): Promise<Buffer>;
	(input: Buffer, password: string, output: string): Promise<DecryptResult>;
	(input: Buffer, options: DecryptOptions & {
		output: string;
	}): Promise<DecryptResult>;
};
export declare const mergePDFs: {
	(output: string, ...inputs: string[]): Promise<MergeResult>;
	(output: string, inputs: string[]): Promise<MergeResult>;
};
export declare const splitPDF: {
	(input: string, outDir: string, options: SplitOptions): Promise<SplitResult>;
	(input: string, outDir: string, span: number): Promise<SplitResult>;
};
export declare const extractPages: {
	(input: string, output: string, options: ExtractOptions): Promise<ExtractResult>;
	(input: string, output: string, pageRange: string): Promise<ExtractResult>;
	(input: string, output: string, pages: number[]): Promise<ExtractResult>;
	(input: string, output: string, page: number): Promise<ExtractResult>;
};
export declare const rotatePDF: {
	(input: string, rotation: number): Promise<Buffer>;
	(input: string, options: RotateOptions): Promise<Buffer>;
	(input: string, rotation: number, output: string): Promise<RotateResult>;
	(input: string, rotation: number, pageRange: string, output: string): Promise<RotateResult>;
	(input: string, options: RotateOptions & {
		output: string;
	}): Promise<RotateResult>;
	(input: Buffer, rotation: number): Promise<Buffer>;
	(input: Buffer, options: RotateOptions): Promise<Buffer>;
	(input: Buffer, rotation: number, output: string): Promise<RotateResult>;
	(input: Buffer, rotation: number, pageRange: string, output: string): Promise<RotateResult>;
	(input: Buffer, options: RotateOptions & {
		output: string;
	}): Promise<RotateResult>;
};
export declare const getPDFInfo: (input: string) => Promise<PDFInfo>;
export declare const validatePDF: {
	(input: string, options?: ValidateOptions): Promise<ValidateResult>;
	(input: string, mode?: "strict" | "relaxed"): Promise<ValidateResult>;
};
export declare const optimizePDF: {
	(input: string): Promise<Buffer>;
	(input: string, output: string): Promise<OptimizeResult>;
	(input: string, options: {
		output: string;
	}): Promise<OptimizeResult>;
	(input: Buffer): Promise<Buffer>;
	(input: Buffer, output: string): Promise<OptimizeResult>;
	(input: Buffer, options: {
		output: string;
	}): Promise<OptimizeResult>;
};
export declare const addWatermark: {
	(input: string, text: string): Promise<Buffer>;
	(input: string, options: WatermarkOptions): Promise<Buffer>;
	(input: string, text: string, output: string): Promise<WatermarkResult>;
	(input: string, text: string, pageRange: string, output: string): Promise<WatermarkResult>;
	(input: string, options: WatermarkOptions & {
		output: string;
	}): Promise<WatermarkResult>;
	(input: Buffer, text: string): Promise<Buffer>;
	(input: Buffer, options: WatermarkOptions): Promise<Buffer>;
	(input: Buffer, text: string, output: string): Promise<WatermarkResult>;
	(input: Buffer, text: string, pageRange: string, output: string): Promise<WatermarkResult>;
	(input: Buffer, options: WatermarkOptions & {
		output: string;
	}): Promise<WatermarkResult>;
};
export declare const removeWatermarks: {
	(input: string, options?: RemoveWatermarksOptions): Promise<Buffer>;
	(input: string, options: RemoveWatermarksOptions & {
		output: string;
	}): Promise<RemoveWatermarksResult>;
	(input: Buffer, options?: RemoveWatermarksOptions): Promise<Buffer>;
	(input: Buffer, options: RemoveWatermarksOptions & {
		output: string;
	}): Promise<RemoveWatermarksResult>;
};
export declare const extractImages: {
	(input: string, outputDir: string, options?: ExtractImagesOptions): Promise<ExtractImagesResult>;
	(input: string, outputDir: string, pageRange?: string): Promise<ExtractImagesResult>;
};
export declare const extractFonts: {
	(input: string, outputDir: string, options?: ExtractFontsOptions): Promise<ExtractFontsResult>;
	(input: string, outputDir: string, pageRange?: string): Promise<ExtractFontsResult>;
};
export declare const extractAttachments: (input: string, outputDir: string) => Promise<ExtractAttachmentsResult>;
export declare const addAttachments: {
	(input: string, ...attachmentPaths: string[]): Promise<Buffer>;
	(input: string, attachmentPaths: string[]): Promise<Buffer>;
	(input: string, output: string, ...attachmentPaths: string[]): Promise<AddAttachmentsResult>;
	(input: string, output: string, attachmentPaths: string[]): Promise<AddAttachmentsResult>;
	(input: string, options: {
		output: string;
	}, ...attachmentPaths: string[]): Promise<AddAttachmentsResult>;
	(input: string, options: {
		output: string;
	}, attachmentPaths: string[]): Promise<AddAttachmentsResult>;
	(input: Buffer, ...attachmentPaths: string[]): Promise<Buffer>;
	(input: Buffer, attachmentPaths: string[]): Promise<Buffer>;
	(input: Buffer, output: string, ...attachmentPaths: string[]): Promise<AddAttachmentsResult>;
	(input: Buffer, output: string, attachmentPaths: string[]): Promise<AddAttachmentsResult>;
	(input: Buffer, options: {
		output: string;
	}, ...attachmentPaths: string[]): Promise<AddAttachmentsResult>;
	(input: Buffer, options: {
		output: string;
	}, attachmentPaths: string[]): Promise<AddAttachmentsResult>;
};
export declare const removeAttachments: {
	(input: string, fileNames?: string[]): Promise<Buffer>;
	(input: string, output: string, fileNames?: string[]): Promise<RemoveAttachmentsResult>;
	(input: string, options: {
		output: string;
		fileNames?: string[];
	}): Promise<RemoveAttachmentsResult>;
	(input: Buffer, fileNames?: string[]): Promise<Buffer>;
	(input: Buffer, output: string, fileNames?: string[]): Promise<RemoveAttachmentsResult>;
	(input: Buffer, options: {
		output: string;
		fileNames?: string[];
	}): Promise<RemoveAttachmentsResult>;
};
export declare const setMetadata: {
	(input: string, options: MetadataOptions): Promise<Buffer>;
	(input: string, title: string, author?: string, subject?: string): Promise<Buffer>;
	(input: string, output: string, options: MetadataOptions): Promise<SetMetadataResult>;
	(input: string, output: string, title: string, author?: string, subject?: string): Promise<SetMetadataResult>;
	(input: Buffer, options: MetadataOptions): Promise<Buffer>;
	(input: Buffer, title: string, author?: string, subject?: string): Promise<Buffer>;
	(input: Buffer, output: string, options: MetadataOptions): Promise<SetMetadataResult>;
	(input: Buffer, output: string, title: string, author?: string, subject?: string): Promise<SetMetadataResult>;
};
export declare const getProperties: (input: string) => Promise<PropertiesResult>;
export declare const dumpObject: (input: string, objectId: string) => Promise<DumpResult>;
export declare const listPageLayout: (input: string) => Promise<ListPageLayoutResult>;
export declare const listPageMode: (input: string) => Promise<ListPageModeResult>;
export declare const resizePDF: {
	(input: string, width: number, height: number, options?: ResizeOptions): Promise<Buffer>;
	(input: string, options: ResizeOptions): Promise<Buffer>;
	(input: string, width: number, height: number, options: ResizeOptions & {
		output: string;
	}): Promise<ResizeResult>;
	(input: string, options: ResizeOptions & {
		output: string;
	}): Promise<ResizeResult>;
	(input: Buffer, width: number, height: number, options?: ResizeOptions): Promise<Buffer>;
	(input: Buffer, options: ResizeOptions): Promise<Buffer>;
	(input: Buffer, width: number, height: number, options: ResizeOptions & {
		output: string;
	}): Promise<ResizeResult>;
	(input: Buffer, options: ResizeOptions & {
		output: string;
	}): Promise<ResizeResult>;
};
export declare const cropPDF: {
	(input: string, x: number, y: number, width: number, height: number, options?: CropOptions): Promise<Buffer>;
	(input: string, options: CropOptions): Promise<Buffer>;
	(input: string, x: number, y: number, width: number, height: number, options: CropOptions & {
		output: string;
	}): Promise<CropResult>;
	(input: string, options: CropOptions & {
		output: string;
	}): Promise<CropResult>;
	(input: Buffer, x: number, y: number, width: number, height: number, options?: CropOptions): Promise<Buffer>;
	(input: Buffer, options: CropOptions): Promise<Buffer>;
	(input: Buffer, x: number, y: number, width: number, height: number, options: CropOptions & {
		output: string;
	}): Promise<CropResult>;
	(input: Buffer, options: CropOptions & {
		output: string;
	}): Promise<CropResult>;
};

export {};
