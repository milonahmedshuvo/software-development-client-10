import React from 'react';




const BlogPage = () => {
    return (
        <div className='md:w-1/2 lg:w-1/2 mx-auto mt-28 p-8 drop-shadow-lg rounded-xl bg-fuchsia-50'>
        <div tabIndex={0} className="collapse mb-5 collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
            What is cors?
            </div>
            <div className="collapse-content"> 
                <p>Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).</p>
            </div>
        </div>

        <div tabIndex={0} className="collapse mb-5 collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
            Why are you using firebase? 
            </div>
            <div className="collapse-content"> 
                <p>Firebase concept is simple. When you build a client-side app with JavaScript or any of its frameworks, for instance, Google Firebase can turn this into a serverless app in no time. It also removes the need to manage databases yourself, as it does that for you.</p>
            </div>
        </div>

        <div tabIndex={0} className="collapse mb-5 collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
            What other options do you have to implement authentication?
            </div>
            <div className="collapse-content"> 
                <p>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
            </div>
        </div>

        <div tabIndex={0} className="collapse mb-5 collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
            How does the private route work?
            </div>
            <div className="collapse-content"> 
                <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
            </div>
        </div>


        <div tabIndex={0} className="collapse mb-5 collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
            What is Node?
            </div>
            <div className="collapse-content"> 
                <p>Node.js is written in C, C++, and JavaScript, and it is built on the open-source V8 JavaScript engine which also powers JS in browsers such as Google Chrome. As V8 supports new features in JavaScript, they are incorporated into Node.</p>
            </div>
        </div>

        <div tabIndex={0} className="collapse mb-5 collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
            How does Node work?
            </div>
            <div className="collapse-content"> 
                <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
            </div>
        </div>


    </div>
    );
};

export default BlogPage;