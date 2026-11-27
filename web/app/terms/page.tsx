"use client";

import Link from "next/link";

type PolicyItem = {
  kind: "section" | "heading" | "paragraph" | "bullet";
  text: string;
};

const policyContent: PolicyItem[] = [
  {
    "kind": "paragraph",
    "text": "Welcome to LOTUS — A Spiritual Social Community."
  },
  {
    "kind": "paragraph",
    "text": "LOTUS is a digital social community designed to bring people together through meaningful connections, knowledge, spiritual values, education, Vedic culture, and personal development."
  },
  {
    "kind": "paragraph",
    "text": "CONNECT → LEARN → PRACTICE → GROW"
  },
  {
    "kind": "paragraph",
    "text": "These Terms of Service & Privacy Policy explain the rules for using LOTUS, the responsibilities of our members, and how we collect, use, store, and protect personal information."
  },
  {
    "kind": "paragraph",
    "text": "By creating an account or using LOTUS, you agree to follow these policies."
  },
  {
    "kind": "section",
    "text": "PART 1: TERMS OF SERVICE"
  },
  {
    "kind": "heading",
    "text": "1. About LOTUS"
  },
  {
    "kind": "paragraph",
    "text": "LOTUS is an online social community where users can:"
  },
  {
    "kind": "bullet",
    "text": "Create and manage personal profiles."
  },
  {
    "kind": "bullet",
    "text": "Connect and communicate with other members."
  },
  {
    "kind": "bullet",
    "text": "Share posts, articles, images, and videos."
  },
  {
    "kind": "bullet",
    "text": "Discover and join communities and sub-communities."
  },
  {
    "kind": "bullet",
    "text": "Participate in discussions and educational activities."
  },
  {
    "kind": "bullet",
    "text": "Explore spiritual, cultural, and Vedic knowledge."
  },
  {
    "kind": "bullet",
    "text": "Develop personal skills and knowledge."
  },
  {
    "kind": "bullet",
    "text": "Participate in learning and practice-based activities."
  },
  {
    "kind": "bullet",
    "text": "Access other features introduced by LOTUS."
  },
  {
    "kind": "paragraph",
    "text": "LOTUS aims to provide a meaningful, respectful, safe, and educational digital environment."
  },
  {
    "kind": "heading",
    "text": "2. Account Registration & Eligibility"
  },
  {
    "kind": "paragraph",
    "text": "To access certain LOTUS features, users must create an account."
  },
  {
    "kind": "paragraph",
    "text": "Users agree to:"
  },
  {
    "kind": "bullet",
    "text": "Provide accurate and truthful registration information."
  },
  {
    "kind": "bullet",
    "text": "Use a unique username and valid contact information."
  },
  {
    "kind": "bullet",
    "text": "Maintain the confidentiality of login credentials."
  },
  {
    "kind": "bullet",
    "text": "Not impersonate another individual or organization."
  },
  {
    "kind": "bullet",
    "text": "Not create fake accounts for fraudulent purposes."
  },
  {
    "kind": "bullet",
    "text": "Keep account information reasonably updated."
  },
  {
    "kind": "bullet",
    "text": "Take responsibility for activities performed through their accounts."
  },
  {
    "kind": "paragraph",
    "text": "Users must meet the minimum age and other eligibility requirements applicable to their location and LOTUS's registration policy."
  },
  {
    "kind": "paragraph",
    "text": "LOTUS may restrict accounts containing false, misleading, or fraudulent information."
  },
  {
    "kind": "heading",
    "text": "3. LOTUS Community Philosophy"
  },
  {
    "kind": "paragraph",
    "text": "Every member is expected to follow the four fundamental principles of LOTUS."
  },
  {
    "kind": "paragraph",
    "text": "3.1 Connect"
  },
  {
    "kind": "paragraph",
    "text": "Build meaningful relationships, communicate respectfully, and create a friendly environment for everyone."
  },
  {
    "kind": "paragraph",
    "text": "3.2 Learn"
  },
  {
    "kind": "paragraph",
    "text": "Explore and share authentic knowledge, education, spirituality, philosophy, and culture."
  },
  {
    "kind": "paragraph",
    "text": "3.3 Practice"
  },
  {
    "kind": "paragraph",
    "text": "Apply positive knowledge through ethical behaviour, self-discipline, constructive activities, and meaningful actions."
  },
  {
    "kind": "paragraph",
    "text": "3.4 Grow"
  },
  {
    "kind": "paragraph",
    "text": "Encourage continuous improvement in knowledge, character, skills, and personal development."
  },
  {
    "kind": "paragraph",
    "text": "All platform activities should support these principles."
  },
  {
    "kind": "heading",
    "text": "4. Community Structure & Administration"
  },
  {
    "kind": "paragraph",
    "text": "LOTUS follows a two-level community structure."
  },
  {
    "kind": "paragraph",
    "text": "Level 1 — Communities"
  },
  {
    "kind": "paragraph",
    "text": "Main communities organized around specific subjects, interests, or purposes."
  },
  {
    "kind": "paragraph",
    "text": "Level 2 — Sub-Communities"
  },
  {
    "kind": "paragraph",
    "text": "Smaller communities operating under their respective main communities."
  },
  {
    "kind": "paragraph",
    "text": "Creating and managing communities is subject to LOTUS policies."
  },
  {
    "kind": "paragraph",
    "text": "Community administrators may receive limited administrative permissions to:"
  },
  {
    "kind": "bullet",
    "text": "Manage community information."
  },
  {
    "kind": "bullet",
    "text": "Approve or manage membership requests, where applicable."
  },
  {
    "kind": "bullet",
    "text": "Moderate community posts and discussions."
  },
  {
    "kind": "bullet",
    "text": "Remove rule-violating content."
  },
  {
    "kind": "bullet",
    "text": "Manage community activities."
  },
  {
    "kind": "bullet",
    "text": "Maintain a respectful environment."
  },
  {
    "kind": "paragraph",
    "text": "Administrators must follow LOTUS-wide policies and cannot establish rules that override the platform's main policies."
  },
  {
    "kind": "paragraph",
    "text": "LOTUS reserves the right to review community activities and restrict communities that repeatedly violate platform rules."
  },
  {
    "kind": "heading",
    "text": "5. Content Creation & Publishing"
  },
  {
    "kind": "paragraph",
    "text": "LOTUS encourages meaningful and constructive content."
  },
  {
    "kind": "paragraph",
    "text": "Users may browse available content and explore the platform according to the applicable access settings."
  },
  {
    "kind": "paragraph",
    "text": "To create and publish content, users may be required to access the Plus (+) button and complete an additional Content Creator Agreement or submission form."
  },
  {
    "kind": "paragraph",
    "text": "The purpose of this process is to maintain the quality, relevance, authenticity, and values of LOTUS."
  },
  {
    "kind": "paragraph",
    "text": "Before publishing content, users must ensure that:"
  },
  {
    "kind": "bullet",
    "text": "Content is relevant to LOTUS's purpose."
  },
  {
    "kind": "bullet",
    "text": "Information is accurate and not intentionally misleading."
  },
  {
    "kind": "bullet",
    "text": "Copyright and intellectual property rights are respected."
  },
  {
    "kind": "bullet",
    "text": "Content does not violate community rules."
  },
  {
    "kind": "bullet",
    "text": "Private information is not shared without proper authorization."
  },
  {
    "kind": "bullet",
    "text": "Content does not promote prohibited activities."
  },
  {
    "kind": "paragraph",
    "text": "LOTUS may use automated moderation systems and human review to identify content that potentially violates its policies."
  },
  {
    "kind": "paragraph",
    "text": "Creators may receive notifications or warnings when submitted content requires correction or violates community rules."
  },
  {
    "kind": "paragraph",
    "text": "Submitting content does not guarantee approval or permanent publication."
  },
  {
    "kind": "heading",
    "text": "6. Community Rules & Prohibited Activities"
  },
  {
    "kind": "paragraph",
    "text": "To maintain a safe and meaningful environment, the following content and activities are prohibited."
  },
  {
    "kind": "paragraph",
    "text": "6.1 Hate Speech & Discrimination"
  },
  {
    "kind": "paragraph",
    "text": "Content promoting hatred, hostility, discrimination, or violence against individuals or groups."
  },
  {
    "kind": "paragraph",
    "text": "6.2 Harassment & Bullying"
  },
  {
    "kind": "paragraph",
    "text": "Threats, intimidation, cyberbullying, stalking, personal attacks, or repeated unwanted harassment."
  },
  {
    "kind": "paragraph",
    "text": "6.3 Fake News & Misinformation"
  },
  {
    "kind": "paragraph",
    "text": "Deliberately spreading fabricated information, misleading claims, rumours, or deceptive content."
  },
  {
    "kind": "paragraph",
    "text": "6.4 Intoxication & Harmful Substances"
  },
  {
    "kind": "paragraph",
    "text": "Promotional content encouraging intoxication, illegal drugs, or harmful substance use."
  },
  {
    "kind": "paragraph",
    "text": "6.5 Gambling & Betting"
  },
  {
    "kind": "paragraph",
    "text": "Gambling, betting, gambling referrals, and promotional activities related to such services."
  },
  {
    "kind": "paragraph",
    "text": "6.6 Meat Consumption & Animal Cruelty"
  },
  {
    "kind": "paragraph",
    "text": "Content promoting meat consumption, animal cruelty, abuse, or exploitation in violation of LOTUS's stated community values."
  },
  {
    "kind": "paragraph",
    "text": "6.7 Sexual & Exploitative Content"
  },
  {
    "kind": "paragraph",
    "text": "Pornographic, sexually explicit, exploitative, or abusive content."
  },
  {
    "kind": "paragraph",
    "text": "6.8 Violence & Illegal Activities"
  },
  {
    "kind": "paragraph",
    "text": "Content encouraging violence, criminal activities, fraud, exploitation, or unlawful conduct."
  },
  {
    "kind": "paragraph",
    "text": "6.9 Spam & Scams"
  },
  {
    "kind": "paragraph",
    "text": "Fake engagement, phishing, fraudulent schemes, misleading advertisements, and repetitive unwanted promotions."
  },
  {
    "kind": "paragraph",
    "text": "6.10 Irrelevant & Harmful Content"
  },
  {
    "kind": "paragraph",
    "text": "Content that repeatedly disrupts LOTUS's spiritual, educational, cultural, and community-focused purpose."
  },
  {
    "kind": "heading",
    "text": "7. Spiritual & Cultural Respect"
  },
  {
    "kind": "paragraph",
    "text": "LOTUS encourages discussions about spirituality, Vedic knowledge, philosophy, religion, culture, and personal development."
  },
  {
    "kind": "paragraph",
    "text": "Members must:"
  },
  {
    "kind": "bullet",
    "text": "Respect different spiritual and cultural traditions."
  },
  {
    "kind": "bullet",
    "text": "Avoid insulting religious or cultural beliefs."
  },
  {
    "kind": "bullet",
    "text": "Maintain respectful discussions."
  },
  {
    "kind": "bullet",
    "text": "Avoid using religious content to promote hatred or discrimination."
  },
  {
    "kind": "bullet",
    "text": "Present personal opinions and interpretations responsibly."
  },
  {
    "kind": "paragraph",
    "text": "Constructive debate, discussion, and respectful criticism are welcome."
  },
  {
    "kind": "heading",
    "text": "8. User Communication & Messaging"
  },
  {
    "kind": "paragraph",
    "text": "Members must maintain respectful communication through comments, messages, and other interactive features."
  },
  {
    "kind": "paragraph",
    "text": "The following activities are prohibited:"
  },
  {
    "kind": "bullet",
    "text": "Sending threatening or abusive messages."
  },
  {
    "kind": "bullet",
    "text": "Repeated unwanted communication."
  },
  {
    "kind": "bullet",
    "text": "Sending fraudulent links or phishing messages."
  },
  {
    "kind": "bullet",
    "text": "Spamming other members."
  },
  {
    "kind": "bullet",
    "text": "Sharing private conversations without appropriate permission."
  },
  {
    "kind": "bullet",
    "text": "Using messaging features for harassment or exploitation."
  },
  {
    "kind": "paragraph",
    "text": "LOTUS may provide blocking, reporting, and other safety features."
  },
  {
    "kind": "heading",
    "text": "9. Copyright & Intellectual Property"
  },
  {
    "kind": "paragraph",
    "text": "Users must respect the intellectual property rights of others."
  },
  {
    "kind": "paragraph",
    "text": "Members must not:"
  },
  {
    "kind": "bullet",
    "text": "Publish another person's work as their own."
  },
  {
    "kind": "bullet",
    "text": "Upload copyrighted material without appropriate permission."
  },
  {
    "kind": "bullet",
    "text": "Use protected images, videos, music, or logos unlawfully."
  },
  {
    "kind": "bullet",
    "text": "Violate trademarks or intellectual property rights."
  },
  {
    "kind": "paragraph",
    "text": "Users retain ownership of the original content they create."
  },
  {
    "kind": "paragraph",
    "text": "By publishing content on LOTUS, users grant LOTUS a non-exclusive, worldwide, royalty-free licence to host, store, display, reproduce, and distribute that content as necessary to operate, provide, and improve the platform, subject to the user's privacy settings and applicable law."
  },
  {
    "kind": "paragraph",
    "text": "This licence ends when the content is deleted or the account is terminated, except where continued retention or use is necessary for legal compliance, security, dispute resolution, or other lawful purposes."
  },
  {
    "kind": "heading",
    "text": "10. AI-Generated Content"
  },
  {
    "kind": "paragraph",
    "text": "AI-generated content may be published if it follows LOTUS's policies."
  },
  {
    "kind": "paragraph",
    "text": "Users must not use AI tools to:"
  },
  {
    "kind": "bullet",
    "text": "Create deceptive identities."
  },
  {
    "kind": "bullet",
    "text": "Impersonate individuals."
  },
  {
    "kind": "bullet",
    "text": "Generate harmful or exploitative material."
  },
  {
    "kind": "bullet",
    "text": "Spread fabricated information."
  },
  {
    "kind": "bullet",
    "text": "Manipulate or deceive other members."
  },
  {
    "kind": "paragraph",
    "text": "Users should disclose AI-generated or substantially AI-modified content where appropriate."
  },
  {
    "kind": "heading",
    "text": "11. Marketplace & Promotional Activities"
  },
  {
    "kind": "paragraph",
    "text": "If LOTUS provides marketplace, advertising, or promotional features, users must:"
  },
  {
    "kind": "bullet",
    "text": "Provide truthful product and service information."
  },
  {
    "kind": "bullet",
    "text": "Avoid fraudulent offers and misleading claims."
  },
  {
    "kind": "bullet",
    "text": "Respect applicable consumer protection laws."
  },
  {
    "kind": "bullet",
    "text": "Avoid prohibited products and services."
  },
  {
    "kind": "bullet",
    "text": "Follow additional marketplace policies."
  },
  {
    "kind": "paragraph",
    "text": "LOTUS may remove unauthorized or misleading promotional content."
  },
  {
    "kind": "heading",
    "text": "12. Content Moderation & Enforcement"
  },
  {
    "kind": "paragraph",
    "text": "LOTUS aims to maintain a safe and respectful environment through moderation."
  },
  {
    "kind": "paragraph",
    "text": "When a violation occurs, LOTUS may:"
  },
  {
    "kind": "bullet",
    "text": "Issue warnings."
  },
  {
    "kind": "bullet",
    "text": "Request content corrections."
  },
  {
    "kind": "bullet",
    "text": "Remove posts, comments, images, or videos."
  },
  {
    "kind": "bullet",
    "text": "Restrict content visibility."
  },
  {
    "kind": "bullet",
    "text": "Temporarily restrict certain account features."
  },
  {
    "kind": "bullet",
    "text": "Suspend accounts."
  },
  {
    "kind": "bullet",
    "text": "Permanently disable accounts."
  },
  {
    "kind": "bullet",
    "text": "Restrict or remove communities and sub-communities."
  },
  {
    "kind": "paragraph",
    "text": "The action taken may depend on the seriousness, frequency, and nature of the violation."
  },
  {
    "kind": "heading",
    "text": "13. Reporting & Appeals"
  },
  {
    "kind": "paragraph",
    "text": "Users can report inappropriate content, profiles, messages, or communities through available reporting features."
  },
  {
    "kind": "paragraph",
    "text": "Reports should be submitted honestly and in good faith."
  },
  {
    "kind": "paragraph",
    "text": "Users may request a review of moderation decisions through the available appeal process."
  },
  {
    "kind": "paragraph",
    "text": "LOTUS may investigate reports and appeals and take appropriate action."
  },
  {
    "kind": "heading",
    "text": "14. Account Suspension & Termination"
  },
  {
    "kind": "paragraph",
    "text": "LOTUS may suspend, restrict, or terminate an account when:"
  },
  {
    "kind": "bullet",
    "text": "The user repeatedly violates community rules."
  },
  {
    "kind": "bullet",
    "text": "The account is involved in fraud or harmful activities."
  },
  {
    "kind": "bullet",
    "text": "The user threatens other members."
  },
  {
    "kind": "bullet",
    "text": "The user misuses platform features."
  },
  {
    "kind": "bullet",
    "text": "The user violates applicable laws."
  },
  {
    "kind": "bullet",
    "text": "The user breaches these Terms of Service."
  },
  {
    "kind": "paragraph",
    "text": "Users may also request account deletion through available account settings or official support channels."
  },
  {
    "kind": "heading",
    "text": "15. Platform Availability & Changes"
  },
  {
    "kind": "paragraph",
    "text": "LOTUS may introduce, update, modify, or discontinue platform features when necessary."
  },
  {
    "kind": "paragraph",
    "text": "Although LOTUS aims to maintain reliable services, uninterrupted access cannot be guaranteed."
  },
  {
    "kind": "paragraph",
    "text": "Temporary service interruptions may occur due to maintenance, technical issues, security incidents, or other circumstances."
  },
  {
    "kind": "heading",
    "text": "16. Third-Party Services"
  },
  {
    "kind": "paragraph",
    "text": "LOTUS may integrate third-party tools, services, websites, or applications."
  },
  {
    "kind": "paragraph",
    "text": "These services may operate under their own terms and privacy policies."
  },
  {
    "kind": "paragraph",
    "text": "Users should review third-party policies before using external services."
  },
  {
    "kind": "paragraph",
    "text": "LOTUS is not responsible for independent third-party services beyond its legal responsibilities."
  },
  {
    "kind": "heading",
    "text": "17. Limitation of Liability"
  },
  {
    "kind": "paragraph",
    "text": "To the extent permitted by applicable law, LOTUS will not be liable for indirect or consequential losses arising from platform interruptions, user-generated content, or unauthorized activities by other users."
  },
  {
    "kind": "paragraph",
    "text": "Nothing in these Terms limits liability that cannot legally be excluded."
  },
  {
    "kind": "heading",
    "text": "18. Changes to Terms of Service"
  },
  {
    "kind": "paragraph",
    "text": "LOTUS may update these Terms when necessary."
  },
  {
    "kind": "paragraph",
    "text": "Important changes may be communicated through website notifications, email, or other appropriate channels."
  },
  {
    "kind": "paragraph",
    "text": "The updated version will include a revised effective date."
  },
  {
    "kind": "section",
    "text": "PART 2: PRIVACY POLICY"
  },
  {
    "kind": "heading",
    "text": "19. Our Privacy Commitment"
  },
  {
    "kind": "paragraph",
    "text": "LOTUS respects the privacy of its members."
  },
  {
    "kind": "paragraph",
    "text": "We are committed to handling personal information responsibly and protecting it through appropriate security practices."
  },
  {
    "kind": "paragraph",
    "text": "We do not sell users' personal information as a commercial product."
  },
  {
    "kind": "paragraph",
    "text": "This Privacy Policy explains how LOTUS collects, uses, stores, shares, and protects information."
  },
  {
    "kind": "heading",
    "text": "20. Information We Collect"
  },
  {
    "kind": "paragraph",
    "text": "LOTUS may collect the following categories of information."
  },
  {
    "kind": "paragraph",
    "text": "20.1 Account Information"
  },
  {
    "kind": "bullet",
    "text": "Full name."
  },
  {
    "kind": "bullet",
    "text": "Username."
  },
  {
    "kind": "bullet",
    "text": "Email address."
  },
  {
    "kind": "bullet",
    "text": "Phone number, if provided."
  },
  {
    "kind": "bullet",
    "text": "Password credentials in securely protected form."
  },
  {
    "kind": "bullet",
    "text": "Profile photograph."
  },
  {
    "kind": "bullet",
    "text": "Account creation information."
  },
  {
    "kind": "paragraph",
    "text": "20.2 Profile Information"
  },
  {
    "kind": "bullet",
    "text": "Profile picture and cover photo."
  },
  {
    "kind": "bullet",
    "text": "Personal introduction."
  },
  {
    "kind": "bullet",
    "text": "Interests and preferences."
  },
  {
    "kind": "bullet",
    "text": "Educational information."
  },
  {
    "kind": "bullet",
    "text": "Skills and achievements."
  },
  {
    "kind": "bullet",
    "text": "Other profile information."
  },
  {
    "kind": "paragraph",
    "text": "20.3 User-Generated Content"
  },
  {
    "kind": "bullet",
    "text": "Posts and articles."
  },
  {
    "kind": "bullet",
    "text": "Images and videos."
  },
  {
    "kind": "bullet",
    "text": "Comments and reactions."
  },
  {
    "kind": "bullet",
    "text": "Community contributions."
  },
  {
    "kind": "bullet",
    "text": "Uploaded files."
  },
  {
    "kind": "bullet",
    "text": "Reports and feedback."
  },
  {
    "kind": "paragraph",
    "text": "20.4 Communication Information"
  },
  {
    "kind": "paragraph",
    "text": "Information related to messages, support requests, complaints, and interactions may be processed to provide the relevant services and maintain platform safety."
  },
  {
    "kind": "paragraph",
    "text": "20.5 Technical Information"
  },
  {
    "kind": "bullet",
    "text": "IP address."
  },
  {
    "kind": "bullet",
    "text": "Browser type and version."
  },
  {
    "kind": "bullet",
    "text": "Device information."
  },
  {
    "kind": "bullet",
    "text": "Operating system."
  },
  {
    "kind": "bullet",
    "text": "Login timestamps."
  },
  {
    "kind": "bullet",
    "text": "Website activity."
  },
  {
    "kind": "bullet",
    "text": "Cookies and similar technologies."
  },
  {
    "kind": "paragraph",
    "text": "20.6 Location Information"
  },
  {
    "kind": "paragraph",
    "text": "Certain LOTUS features may require location information."
  },
  {
    "kind": "paragraph",
    "text": "Where applicable, location access will be requested through appropriate device or browser permissions."
  },
  {
    "kind": "paragraph",
    "text": "Users may decline location access, although some location-dependent features may not function."
  },
  {
    "kind": "heading",
    "text": "21. How We Use Personal Information"
  },
  {
    "kind": "paragraph",
    "text": "LOTUS may use personal information to:"
  },
  {
    "kind": "bullet",
    "text": "Register and manage accounts."
  },
  {
    "kind": "bullet",
    "text": "Provide platform services."
  },
  {
    "kind": "bullet",
    "text": "Maintain user profiles."
  },
  {
    "kind": "bullet",
    "text": "Enable social interactions."
  },
  {
    "kind": "bullet",
    "text": "Connect users with relevant communities."
  },
  {
    "kind": "bullet",
    "text": "Display and manage content."
  },
  {
    "kind": "bullet",
    "text": "Improve platform performance."
  },
  {
    "kind": "bullet",
    "text": "Maintain account security."
  },
  {
    "kind": "bullet",
    "text": "Detect fraud and suspicious activities."
  },
  {
    "kind": "bullet",
    "text": "Moderate inappropriate content."
  },
  {
    "kind": "bullet",
    "text": "Investigate reports and complaints."
  },
  {
    "kind": "bullet",
    "text": "Send important service notifications."
  },
  {
    "kind": "bullet",
    "text": "Provide technical support."
  },
  {
    "kind": "bullet",
    "text": "Meet applicable legal obligations."
  },
  {
    "kind": "paragraph",
    "text": "We will process personal information for appropriate and lawful purposes."
  },
  {
    "kind": "heading",
    "text": "22. How We Share Information"
  },
  {
    "kind": "paragraph",
    "text": "LOTUS does not sell personal information to third parties."
  },
  {
    "kind": "paragraph",
    "text": "22.1 Public Content"
  },
  {
    "kind": "paragraph",
    "text": "Information users choose to publish publicly may be visible to other LOTUS members or visitors, depending on privacy and visibility settings."
  },
  {
    "kind": "paragraph",
    "text": "22.2 Service Providers"
  },
  {
    "kind": "paragraph",
    "text": "LOTUS may work with trusted providers for website hosting, database services, authentication, email delivery, media storage, security services, analytics, and technical maintenance. Such providers may process information as necessary to provide contracted services."
  },
  {
    "kind": "paragraph",
    "text": "22.3 Legal Requirements"
  },
  {
    "kind": "paragraph",
    "text": "Information may be disclosed when required by applicable laws, valid legal processes, or lawful requests from authorized authorities."
  },
  {
    "kind": "paragraph",
    "text": "22.4 Safety & Security"
  },
  {
    "kind": "paragraph",
    "text": "Information may be shared where reasonably necessary to investigate fraud, prevent harm, protect users, or enforce platform policies, subject to applicable law."
  },
  {
    "kind": "paragraph",
    "text": "However, information may be shared in the following circumstances."
  },
  {
    "kind": "paragraph",
    "text": "22.1 Public Content"
  },
  {
    "kind": "paragraph",
    "text": "Information users choose to publish publicly may be visible to other LOTUS members or visitors, depending on privacy and visibility settings."
  },
  {
    "kind": "paragraph",
    "text": "22.2 Service Providers"
  },
  {
    "kind": "paragraph",
    "text": "LOTUS may work with trusted providers for website hosting, database services, authentication, email delivery, media storage, security services, analytics, and technical maintenance. Such providers may process information as necessary to provide contracted services."
  },
  {
    "kind": "paragraph",
    "text": "22.3 Legal Requirements"
  },
  {
    "kind": "paragraph",
    "text": "Information may be disclosed when required by applicable laws, valid legal processes, or lawful requests from authorized authorities."
  },
  {
    "kind": "paragraph",
    "text": "22.4 Safety & Security"
  },
  {
    "kind": "paragraph",
    "text": "Information may be shared where reasonably necessary to investigate fraud, prevent harm, protect users, or enforce platform policies, subject to applicable law."
  },
  {
    "kind": "heading",
    "text": "23. Data Storage & Security"
  },
  {
    "kind": "paragraph",
    "text": "LOTUS aims to protect user information through appropriate technical and organizational safeguards."
  },
  {
    "kind": "bullet",
    "text": "Secure login systems."
  },
  {
    "kind": "bullet",
    "text": "Password hashing."
  },
  {
    "kind": "bullet",
    "text": "HTTPS encryption."
  },
  {
    "kind": "bullet",
    "text": "Restricted database access."
  },
  {
    "kind": "bullet",
    "text": "Security monitoring."
  },
  {
    "kind": "bullet",
    "text": "Protection against unauthorized access."
  },
  {
    "kind": "bullet",
    "text": "Regular system maintenance."
  },
  {
    "kind": "paragraph",
    "text": "Access to personal information should be limited to authorized personnel and service providers who need it for legitimate purposes."
  },
  {
    "kind": "paragraph",
    "text": "However, no online system can guarantee absolute security."
  },
  {
    "kind": "heading",
    "text": "24. Cookies & Tracking Technologies"
  },
  {
    "kind": "paragraph",
    "text": "LOTUS may use cookies and similar technologies to:"
  },
  {
    "kind": "bullet",
    "text": "Maintain login sessions."
  },
  {
    "kind": "bullet",
    "text": "Remember preferences."
  },
  {
    "kind": "bullet",
    "text": "Improve website functionality."
  },
  {
    "kind": "bullet",
    "text": "Understand website usage."
  },
  {
    "kind": "bullet",
    "text": "Enhance security."
  },
  {
    "kind": "paragraph",
    "text": "Where legally required, appropriate choices will be provided for non-essential cookies."
  },
  {
    "kind": "paragraph",
    "text": "Users may also manage cookies through their browser settings."
  },
  {
    "kind": "heading",
    "text": "25. User Privacy Controls"
  },
  {
    "kind": "paragraph",
    "text": "Depending on the available features, LOTUS may allow users to:"
  },
  {
    "kind": "bullet",
    "text": "Edit personal profile information."
  },
  {
    "kind": "bullet",
    "text": "Change passwords."
  },
  {
    "kind": "bullet",
    "text": "Manage profile visibility."
  },
  {
    "kind": "bullet",
    "text": "Control certain notification preferences."
  },
  {
    "kind": "bullet",
    "text": "Block other users."
  },
  {
    "kind": "bullet",
    "text": "Report inappropriate activities."
  },
  {
    "kind": "bullet",
    "text": "Manage content visibility."
  },
  {
    "kind": "bullet",
    "text": "Request account deletion."
  },
  {
    "kind": "paragraph",
    "text": "Users should regularly review their privacy settings."
  },
  {
    "kind": "heading",
    "text": "26. Data Retention"
  },
  {
    "kind": "paragraph",
    "text": "LOTUS will retain personal information only for as long as reasonably necessary for the purposes described in this policy or as required by applicable law."
  },
  {
    "kind": "paragraph",
    "text": "Certain information may be retained for:"
  },
  {
    "kind": "bullet",
    "text": "Legal compliance."
  },
  {
    "kind": "bullet",
    "text": "Security investigations."
  },
  {
    "kind": "bullet",
    "text": "Fraud prevention."
  },
  {
    "kind": "bullet",
    "text": "Dispute resolution."
  },
  {
    "kind": "bullet",
    "text": "Enforcement of platform policies."
  },
  {
    "kind": "paragraph",
    "text": "When information is no longer required, LOTUS will take appropriate steps to delete or anonymize it, subject to applicable retention requirements."
  },
  {
    "kind": "paragraph",
    "text": "When information is no longer required, LOTUS will take appropriate steps to delete or anonymize it, subject to applicable retention requirements."
  },
  {
    "kind": "heading",
    "text": "27. Account Deletion & Data Removal"
  },
  {
    "kind": "paragraph",
    "text": "Users may request account deletion through available account settings or official support channels."
  },
  {
    "kind": "paragraph",
    "text": "Following a valid deletion request:"
  },
  {
    "kind": "bullet",
    "text": "Account access may be disabled."
  },
  {
    "kind": "bullet",
    "text": "Personal information will be deleted or anonymized according to applicable requirements."
  },
  {
    "kind": "bullet",
    "text": "Certain information may be retained when legally necessary."
  },
  {
    "kind": "bullet",
    "text": "Content already copied, independently shared, or retained by other users may not be removable from those users' copies."
  },
  {
    "kind": "paragraph",
    "text": "LOTUS will handle deletion requests in accordance with applicable laws and its data retention procedures."
  },
  {
    "kind": "paragraph",
    "text": "LOTUS will handle deletion requests in accordance with applicable laws and its data retention procedures."
  },
  {
    "kind": "heading",
    "text": "28. Children's Privacy & Safety"
  },
  {
    "kind": "paragraph",
    "text": "LOTUS takes children's privacy and safety seriously."
  },
  {
    "kind": "paragraph",
    "text": "The platform will follow applicable age-related requirements and safeguards."
  },
  {
    "kind": "paragraph",
    "text": "Personal information relating to children will be handled in accordance with applicable laws, including parental consent requirements where applicable."
  },
  {
    "kind": "paragraph",
    "text": "Any exploitation, harassment, or harmful activity involving children is strictly prohibited."
  },
  {
    "kind": "heading",
    "text": "29. International Data Processing"
  },
  {
    "kind": "paragraph",
    "text": "LOTUS may use hosting providers or technical services located in different countries."
  },
  {
    "kind": "paragraph",
    "text": "Where personal information is transferred or processed internationally, LOTUS will follow applicable legal requirements and implement appropriate safeguards where necessary."
  },
  {
    "kind": "heading",
    "text": "30. Your Privacy Rights"
  },
  {
    "kind": "paragraph",
    "text": "Subject to applicable law, users may have the right to:"
  },
  {
    "kind": "bullet",
    "text": "Request access to their personal information."
  },
  {
    "kind": "bullet",
    "text": "Request correction of inaccurate information."
  },
  {
    "kind": "bullet",
    "text": "Request deletion of personal information."
  },
  {
    "kind": "bullet",
    "text": "Withdraw consent where processing is based on consent."
  },
  {
    "kind": "bullet",
    "text": "Raise privacy-related complaints."
  },
  {
    "kind": "bullet",
    "text": "Exercise other rights available under applicable data protection laws."
  },
  {
    "kind": "paragraph",
    "text": "Users may contact LOTUS through the official privacy support channel to exercise applicable rights."
  },
  {
    "kind": "heading",
    "text": "31. Changes to Privacy Policy"
  },
  {
    "kind": "paragraph",
    "text": "LOTUS may update this Privacy Policy to reflect changes in technology, platform features, business operations, or legal requirements."
  },
  {
    "kind": "paragraph",
    "text": "Important changes may be communicated through appropriate notifications or other available channels."
  },
  {
    "kind": "paragraph",
    "text": "The latest version will be published on the LOTUS website with an updated effective date."
  },
  {
    "kind": "section",
    "text": "PART 3: GENERAL PROVISIONS"
  },
  {
    "kind": "heading",
    "text": "32. Governing Law"
  },
  {
    "kind": "paragraph",
    "text": "These Terms of Service & Privacy Policy shall be governed by the applicable laws of India, subject to applicable legal requirements."
  },
  {
    "kind": "paragraph",
    "text": "Any disputes will be handled by the competent courts or authorities having jurisdiction under applicable law."
  },
  {
    "kind": "heading",
    "text": "33. Policy Interpretation"
  },
  {
    "kind": "paragraph",
    "text": "These policies should be interpreted consistently with applicable laws."
  },
  {
    "kind": "paragraph",
    "text": "If any provision is found to be invalid or unenforceable, the remaining provisions will continue to apply to the extent legally permitted."
  },
  {
    "kind": "heading",
    "text": "34. Contact & Support"
  },
  {
    "kind": "paragraph",
    "text": "For questions, complaints, account-related issues, or privacy concerns, users may contact LOTUS through its official support channels."
  },
  {
    "kind": "paragraph",
    "text": "LOTUS Support"
  },
  {
    "kind": "paragraph",
    "text": "Official Email: [TO BE UPDATED]"
  },
  {
    "kind": "paragraph",
    "text": "Privacy Contact: [TO BE UPDATED]"
  },
  {
    "kind": "paragraph",
    "text": "Website: [TO BE UPDATED]"
  },
  {
    "kind": "section",
    "text": "OUR COMMITMENT"
  },
  {
    "kind": "paragraph",
    "text": "LOTUS is not just a social networking platform."
  },
  {
    "kind": "paragraph",
    "text": "It is a community dedicated to meaningful connections, authentic knowledge, positive practices, spiritual awareness, and continuous personal growth."
  },
  {
    "kind": "paragraph",
    "text": "We believe that technology should encourage people to develop themselves and contribute positively to society."
  },
  {
    "kind": "paragraph",
    "text": "CONNECT → LEARN → PRACTICE → GROW"
  },
  {
    "kind": "paragraph",
    "text": "Thank you for being a part of LOTUS.\nThe LOTUS Team"
  }
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#fffaf5] px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <Link
            href="/signup/terms"
            className="text-sm font-semibold text-[#f58220] transition hover:text-[#df6d10]"
          >
            ← Back
          </Link>
          <span className="text-xs font-semibold tracking-[0.18em] text-[#a06a3d]">
            LOTUS
          </span>
        </div>

        <article className="overflow-hidden rounded-3xl border border-[#f0e2d5] bg-white shadow-[0_12px_40px_rgba(80,45,20,0.07)]">
          <header className="border-b border-[#f0e2d5] bg-[#fff7ef] px-6 py-10 text-center sm:px-12">
            <div className="mb-3 text-3xl font-extrabold tracking-[0.18em] text-[#f58220]">
              LOTUS
            </div>
            <h1 className="text-2xl font-extrabold leading-tight text-[#24201d] sm:text-4xl">
              TERMS OF SERVICE
              <br />
              &amp; PRIVACY POLICY
            </h1>
            <p className="mt-3 text-sm text-[#74675e]">
              A Spiritual Social Community
            </p>
            <p className="mt-5 text-xs font-bold tracking-wide text-[#b66b2d] sm:text-sm">
              CONNECT → LEARN → PRACTICE → GROW
            </p>
            <div className="mt-6 text-xs text-[#75675e] sm:text-sm">
              Effective Date: November 28, 2026
              <span className="mx-2">|</span>
              Last Updated: November 28, 2026
            </div>
          </header>

          <div className="px-6 py-8 sm:px-12 sm:py-10">
            <div className="space-y-5">
              {policyContent.map((item, index) => {
                if (item.kind === "section") {
                  return (
                    <h2
                      key={index}
                      className="border-b-2 border-[#f58220] pb-2 pt-7 text-xl font-extrabold text-[#d96d16] sm:text-2xl"
                    >
                      {item.text}
                    </h2>
                  );
                }

                if (item.kind === "heading") {
                  return (
                    <h3
                      key={index}
                      className="pt-4 text-base font-bold text-[#29231f] sm:text-lg"
                    >
                      {item.text}
                    </h3>
                  );
                }

                if (item.kind === "bullet") {
                  return (
                    <div key={index} className="flex gap-3 pl-2 text-sm leading-7 text-[#514941] sm:text-[15px]">
                      <span className="mt-[1px] text-[#f58220]">•</span>
                      <p>{item.text}</p>
                    </div>
                  );
                }

                return (
                  <p
                    key={index}
                    className="whitespace-pre-line text-sm leading-7 text-[#514941] sm:text-[15px]"
                  >
                    {item.text}
                  </p>
                );
              })}
            </div>

            <div className="mt-10 border-t border-[#eee2d8] pt-6 text-center">
              <p className="text-xs font-bold tracking-[0.14em] text-[#b66b2d]">
                CONNECT → LEARN → PRACTICE → GROW
              </p>
              <Link
                href="/signup/terms"
                className="mt-5 inline-flex h-11 items-center justify-center rounded-full bg-[#f58220] px-6 text-sm font-semibold text-white shadow-md transition hover:bg-[#e97413]"
              >
                Back to Sign Up
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
