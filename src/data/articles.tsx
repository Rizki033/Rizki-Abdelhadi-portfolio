import { Shield, Terminal, BookOpen } from "lucide-react";
import { CodeBlock } from "../components/ui/CodeBlock";

export type Article = {
    id: number;
    slug: string;
    title: string;
    description: string;
    date: string;
    category: string;
    icon: any;
    content?: React.ReactNode;
};

export const articles: Article[] = [
    {
        id: 1,
        slug: "securing-react-xss",
        title: "Securing React Applications against XSS",
        description: "Best practices and common pitfalls when handling user input and rendering dynamic content in modern single-page applications.",
        date: "Feb 2026",
        category: "Web Security",
        icon: Shield,
        content: (
            <div className="space-y-8 text-foreground/90 text-lg leading-relaxed max-w-4xl mx-auto">
                <header className="mb-10 border-b border-border/50 pb-8">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 font-mono text-primary group-hover:text-primary transition-colors">Is React vulnerable to XSS?</h1>
                    <div className="flex items-center gap-4 text-sm text-primary/60 font-mono">
                        <span>Zbigniew Banach / Ayusharpcoder</span>
                        <span>•</span>
                        <span>May 1, 2025</span>
                    </div>
                </header>

                <p className="text-xl text-foreground font-medium border-l-4 border-primary/50 pl-4 py-2 bg-primary/5">
                    React was designed with XSS prevention in mind, but is it completely safe from XSS attacks? Learn how your React applications are protected against cross-site scripting, when they can still be vulnerable, and what best practices (and testing methods) will help to keep your application environments secure.
                </p>

                <p>
                    React is designed to help developers build secure and dynamic web applications. However, like any front-end framework, it can still be vulnerable to cross-site scripting (XSS) if used incorrectly. Understanding React’s built-in protections and the scenarios in which they can fail is essential for writing secure components.
                </p>

                <h2 className="text-2xl font-bold font-mono text-primary mt-12 mb-6 flex items-center gap-2">
                    <span className="text-muted-foreground/50">#</span> Understanding XSS and its impact
                </h2>

                <h3 className="text-xl font-bold mt-8 mb-4">What is cross-site scripting (XSS)?</h3>
                <p>
                    XSS is a security vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users. These scripts run in the victim’s browser and can steal sensitive data, impersonate users, or manipulate application behavior. It remains one of the most common vulnerabilities in web applications, frequently appearing in the OWASP Top 10.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">Why XSS is a common threat</h3>
                <p>
                    Modern front-end frameworks rely heavily on client-side rendering, dynamic content, and user interactions, increasing the likelihood of developers inadvertently introducing unsafe handling of user input. Without proper validation and sanitization, user-controlled data can be executed in the browser context, leading to XSS.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">Types of XSS</h3>
                <ul className="list-disc pl-6 space-y-2 mt-4 text-base">
                    <li><strong className="text-foreground">Reflected XSS</strong> occurs when malicious input is immediately echoed back to the browser in the HTTP response, such as via URL parameters.</li>
                    <li><strong className="text-foreground">Stored XSS</strong> involves persisting malicious scripts in the backend (e.g., in a database), which are later delivered to users through normal application flows.</li>
                    <li><strong className="text-foreground">DOM-based XSS</strong> exploits vulnerabilities in client-side scripts that dynamically modify the DOM based on user input without sanitization.</li>
                </ul>

                <h2 className="text-2xl font-bold font-mono text-primary mt-12 mb-6 flex items-center gap-2">
                    <span className="text-muted-foreground/50">#</span> How React helps prevent XSS by design
                </h2>
                <p>
                    The React framework was one of the first to be built with security in mind and includes features that make it harder to introduce XSS vulnerabilities. One of the core innovations in React is JSX. JSX is compiled to JavaScript and rendered using React’s virtual DOM, which adds a layer of abstraction and safety when interacting with the DOM.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">Automatic escaping in JSX</h3>
                <p>
                    React helps protect against XSS primarily by escaping values rendered in JSX before inserting them into the DOM. This is done using a mechanism that ensures injected data is treated as plain text, not interpreted as executable HTML or JavaScript.
                </p>
                <p className="p-4 bg-muted/30 rounded-lg border border-border/50 text-sm mt-4">
                    Characters like <code>&lt;</code>, <code>&gt;</code>, <code>&amp;</code>, <code>'</code>, and <code>"</code> are escaped to their respective HTML entities. This prevents them from being parsed as HTML tags or attributes.
                </p>

                <h2 className="text-2xl font-bold font-mono text-primary mt-12 mb-6 flex items-center gap-2">
                    <span className="text-muted-foreground/50">#</span> What can make React apps vulnerable?
                </h2>
                <p>
                    Despite its protective defaults, React is not immune to XSS vulnerabilities. Developers can still introduce risk through specific APIs or by misusing features that bypass the normal safety mechanisms.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">Using dangerouslySetInnerHTML</h3>
                <p>
                    One of the most common ways XSS can re-enter a React app is through the use of <code>dangerouslySetInnerHTML</code>, which bypasses React’s built-in escaping. Its usage is explicitly marked as "dangerous" to discourage misuse.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">Real-world examples of XSS in React apps</h3>

                <div className="mt-8">
                    <h4 className="font-bold text-lg mb-2">Example 1: Using unsanitized Markdown</h4>
                    <p className="text-base mb-4">Consider a component that renders Markdown using a parser that outputs raw HTML. If this output is injected with dangerouslySetInnerHTML without sanitization, attackers can exploit it.</p>
                    <CodeBlock
                        language="jsx"
                        code={`function MarkdownViewer({ content }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
  );
}

// Malicious input: \`![x](x "onerror='alert(1)')"\``}
                    />
                    <p className="text-sm text-muted-foreground">Without sanitizing content, this approach can allow injection of `&lt;img&gt;` tags with `onerror` handlers that execute JavaScript.</p>
                </div>

                <div className="mt-8">
                    <h4 className="font-bold text-lg mb-2">Example 2: External data injection via APIs</h4>
                    <p className="text-base mb-4">Suppose an app fetches a news summary from an external API and renders it with raw HTML.</p>
                    <CodeBlock
                        language="jsx"
                        code={`useEffect(() => {
  fetch('/api/news')
    .then(res => res.text())
    .then(html => setContent(html));
}, []);

return <div dangerouslySetInnerHTML={{ __html: content }} />;`}
                    />
                    <p className="text-sm text-muted-foreground">If the API is compromised or the data is not properly filtered, attackers can inject scripts through the returned HTML.</p>
                </div>

                <div className="mt-8">
                    <h4 className="font-bold text-lg mb-2">Example 3: Misconfigured dangerouslySetInnerHTML</h4>
                    <CodeBlock
                        language="jsx"
                        code={`const SafeHtml = ({ rawHtml }) => (
  <div dangerouslySetInnerHTML={{ __html: rawHtml }} />
);

// rawHtml might contain: \`<script>alert('XSS')</script>\``}
                    />
                </div>

                <h2 className="text-2xl font-bold font-mono text-primary mt-12 mb-6 flex items-center gap-2">
                    <span className="text-muted-foreground/50">#</span> Best practices to prevent XSS in React
                </h2>

                <div className="space-y-6">
                    <div className="p-6 border border-border/50 rounded-xl bg-card/30">
                        <h4 className="font-bold text-lg text-primary mb-2">1. Don’t use dangerouslySetInnerHTML unless absolutely necessary</h4>
                        <p className="text-base text-muted-foreground">Avoid it whenever possible. When raw HTML must be rendered, sanitize the content using a robust library like DOMPurify before injecting HTML into the DOM.</p>
                    </div>

                    <div className="p-6 border border-border/50 rounded-xl bg-card/30">
                        <h4 className="font-bold text-lg text-primary mb-2">2. Validate and sanitize inputs on the backend</h4>
                        <p className="text-base text-muted-foreground">Server-side validation ensures that malicious data does not enter your system, complementing client-side protections. It also prevents tampered requests or API responses from introducing harmful content.</p>
                    </div>

                    <div className="p-6 border border-border/50 rounded-xl bg-card/30">
                        <h4 className="font-bold text-lg text-primary mb-2">3. Set a strict Content Security Policy (CSP)</h4>
                        <p className="text-base text-muted-foreground">A strong CSP can block script execution from unauthorized sources and add a critical layer of defense. It’s especially useful as a fallback when other protections fail. Add CSP headers to your HTTP responses to control script execution (e.g., <code>default-src 'self'</code>).</p>
                    </div>

                    <div className="p-6 border border-border/50 rounded-xl bg-card/30">
                        <h4 className="font-bold text-lg text-primary mb-2">4. Secure your Dependencies & Cookies</h4>
                        <p className="text-base text-muted-foreground">Keep your project's dependencies updated to patch known vulnerabilities. Mark authentication cookies as <code>HttpOnly</code> to prevent access from JavaScript and as <code>Secure</code> to ensure they are transmitted only over HTTPS.</p>
                    </div>
                </div>

                <div className="mt-12 p-6 border-l-4 border-primary bg-primary/5 rounded-r-xl shadow-inner">
                    <h4 className="text-lg font-bold text-foreground mb-2 font-mono flex items-center gap-2">
                        <Shield className="w-5 h-5 text-primary" /> Conclusion
                    </h4>
                    <p className="text-base">
                        Securing a React application is an ongoing process that involves multiple layers of defense. By following these best practices — such as preventing XSS, securing dependencies, using HTTPS, and protecting sensitive data — you can ensure that your application remains secure and resilient. Remember, security is not a one-time task; it requires constant attention and regular updates.
                    </p>
                </div>
            </div>
        )
    },
    {
        id: 2,
        slug: "zero-trust-architecture",
        title: "Zero Trust Architecture Explained",
        description: "A deep dive into the core principles of ZTA: continuous verification, least privilege, and assumed breach.",
        date: "Drafting",
        category: "Architecture",
        icon: Terminal
    },
    {
        id: 3,
        slug: "automating-sast",
        title: "Automating Static Analysis in CI/CD",
        description: "How to integrate DevSecOps practices by running automated SAST tools in your GitHub Actions workflows.",
        date: "Planned",
        category: "DevSecOps",
        icon: BookOpen
    }
];
