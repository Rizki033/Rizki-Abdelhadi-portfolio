// import React, { useState } from "react";
// import { Check, Copy } from "lucide-react";

// interface CodeBlockProps {
//     code: string;
//     language?: string;
// }

// export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = "jsx" }) => {
//     const [copied, setCopied] = useState(false);

//     const onCopy = async () => {
//         try {
//             await navigator.clipboard.writeText(code);
//             setCopied(true);
//             setTimeout(() => setCopied(false), 2000);
//         } catch (error) {
//             console.error("Failed to copy text to clipboard", error);
//         }
//     };

//     return (
//         <div className="relative my-6 rounded-lg overflow-hidden bg-[#1E1E1E] border border-border/40 font-mono text-sm leading-relaxed shadow-lg group">
//             <div className="flex items-center justify-between px-4 py-2 bg-[#2D2D2D] border-b border-white/5">
//                 <span className="text-xs text-white/50">{language}</span>
//                 <button
//                     onClick={onCopy}
//                     className="p-1.5 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-md transition-colors bg-white/5 hover:bg-white/10 text-white/70"
//                     aria-label="Copy to clipboard"
//                     title="Copy Code"
//                 >
//                     {copied ? (
//                         <Check className="w-3.5 h-3.5 text-green-400" />
//                     ) : (
//                         <Copy className="w-3.5 h-3.5" />
//                     )}
//                 </button>
//             </div>
//             <div className="p-4 overflow-x-auto text-white/90">
//                 <pre>
//                     <code>{code}</code>
//                 </pre>
//             </div>
//         </div>
//     );
// };
