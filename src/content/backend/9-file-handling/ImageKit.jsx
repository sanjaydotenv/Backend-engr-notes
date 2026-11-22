import CodeBlock from "../../../components/common/CodeBlock";

function ImageKit() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          FILE HANDLING / 07
        </p>
        <h1 className="mt-2 text-3xl font-bold">ImageKit</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          ImageKit is a cloud-based media management platform used to
          upload, store, optimize, transform, and deliver images and
          videos. It helps applications manage media without maintaining
          their own storage infrastructure.
        </p>
      </div>

      {/* 1. Why ImageKit */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Why ImageKit?</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Upload and store images and videos in the cloud.</li>
          <li>Optimize images automatically.</li>
          <li>Resize and crop images using URL transformations.</li>
          <li>Deliver media through a CDN.</li>
          <li>Generate optimized image URLs.</li>
          <li>Manage media without using local server storage.</li>
        </ul>
      </section>

      {/* 2. How it works */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. How ImageKit Works</h2>

        <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <div className="space-y-2 text-center text-sm">
            {[
              "User selects an image",
              "Frontend sends the file to backend",
              "Backend validates the file",
              "Backend uploads the file to ImageKit",
              "ImageKit stores and processes the file",
              "ImageKit returns file URL and file ID",
              "Backend saves file details in MongoDB",
              "Frontend displays the image using its URL",
            ].map((step, index) => (
              <div key={step}>
                <div className="rounded-md border border-[var(--border-color)] p-3">
                  <span className="font-semibold text-[var(--accent-color)]">
                    {index + 1}.{" "}
                  </span>
                  {step}
                </div>
                {index !== 7 && (
                  <div className="text-[var(--accent-color)]">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Account Setup */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Create an ImageKit Account</h2>

        <ol className="list-decimal space-y-3 pl-5 text-[var(--text-secondary)]">
          <li>Open the ImageKit website and create an account.</li>
          <li>Log in to your ImageKit dashboard.</li>
          <li>Open the Developer Options or API Keys section.</li>
          <li>Find your Public Key, Private Key, and URL Endpoint.</li>
          <li>Copy these credentials for backend configuration.</li>
        </ol>

        <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="font-semibold">Required Credentials</p>
          <ul className="mt-2 space-y-2 text-sm text-[var(--text-secondary)]">
            <li><strong>Public Key:</strong> Identifies your ImageKit public credentials.</li>
            <li><strong>Private Key:</strong> Used for secure server-side authentication.</li>
            <li><strong>URL Endpoint:</strong> Base URL used to deliver your media.</li>
          </ul>
        </div>
      </section>

      {/* 4. Installation */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Install ImageKit SDK</h2>
        <p className="text-[var(--text-secondary)]">
          Install the official ImageKit Node.js SDK.
        </p>
        <CodeBlock code={`npm install @imagekit/nodejs`} />
      </section>

      {/* 5. Environment Variables */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Environment Variables</h2>
        <p className="text-[var(--text-secondary)]">
          Store ImageKit credentials in your backend .env file.
        </p>
        <CodeBlock
          code={`IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id`}
        />
        <p className="text-sm text-[var(--text-secondary)]">
          Never expose the Private Key in frontend code or commit it to
          GitHub. Keep your .env file in .gitignore.
        </p>
      </section>

      {/* 6. Configuration */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Configure ImageKit</h2>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          config/imagekit.js
        </p>
        <CodeBlock
          code={`import ImageKit from "@imagekit/nodejs";
import "dotenv/config";

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

export default imagekit;`}
        />
        <p className="text-sm text-[var(--text-secondary)]">
          The backend SDK uses the Private Key for server-side operations.
          The URL Endpoint is supplied when generating delivery URLs.
        </p>
      </section>

      {/* 7. Upload */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Upload a File to ImageKit</h2>
        <p className="text-[var(--text-secondary)]">
          The files.upload() method uploads files to the ImageKit Media
          Library. It accepts file data and a filename.
        </p>
        <CodeBlock
          code={`import fs from "node:fs";
import imagekit from "../config/imagekit.js";

const result = await imagekit.files.upload({
  file: fs.createReadStream("uploads/photo.jpg"),
  fileName: "photo.jpg",
  folder: "/my-app",
});

console.log(result.url);
console.log(result.fileId);
console.log(result.filePath);`}
        />
        <p className="text-sm text-[var(--text-secondary)]">
          ImageKit returns details such as the file URL, file ID, and
          file path. The file ID can be used for file management.
        </p>
      </section>

      {/* 8. Multer Integration */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Integrate ImageKit with Multer</h2>
        <p className="text-[var(--text-secondary)]">
          Multer receives the uploaded file from the frontend. We can
          then pass its temporary file stream to ImageKit.
        </p>

        <p className="text-sm font-medium text-[var(--accent-color)]">
          middleware/upload.js
        </p>
        <CodeBlock
          code={`import multer from "multer";

const upload = multer({
  dest: "uploads/",
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

export default upload;`}
        />

        <p className="text-sm font-medium text-[var(--accent-color)]">
          controllers/uploadController.js
        </p>
        <CodeBlock
          code={`import fs from "node:fs";
import fsPromises from "node:fs/promises";
import imagekit from "../config/imagekit.js";

export const uploadImage = async (req, res) => {
  let localPath;

  try {
    if (!req.file) {
      return res.status(400).json({
        message: "Please select an image",
      });
    }

    localPath = req.file.path;

    const result = await imagekit.files.upload({
      file: fs.createReadStream(localPath),
      fileName: req.file.originalname,
      folder: "/my-app",
      useUniqueFileName: true,
    });

    return res.status(201).json({
      message: "Image uploaded successfully",
      image: {
        url: result.url,
        fileId: result.fileId,
        filePath: result.filePath,
      },
    });
  } catch (error) {
    console.error("Image upload failed:", error);

    return res.status(500).json({
      message: "Image upload failed",
    });
  } finally {
    if (localPath) {
      await fsPromises.unlink(localPath).catch(console.error);
    }
  }
};`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          The file is first saved temporarily by Multer, then streamed
          to ImageKit. Finally, the temporary local file is deleted.
          The uploaded cloud file remains stored in ImageKit.
        </p>
      </section>

      {/* 9. Route */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Create Upload Route</h2>
        <CodeBlock
          code={`import express from "express";
import upload from "../middleware/upload.js";
import { uploadImage } from "../controllers/uploadController.js";

const router = express.Router();

router.post(
  "/upload",
  upload.single("image"),
  uploadImage
);

export default router;`}
        />
        <p className="text-sm text-[var(--text-secondary)]">
          Register this router in your Express application.
        </p>
        <CodeBlock
          code={`app.use("/api", uploadRoutes);

// Endpoint:
// POST /api/upload`}
        />
      </section>

      {/* 10. Frontend */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Upload from React Frontend</h2>
        <CodeBlock
          code={`const formData = new FormData();

formData.append("image", selectedFile);

const response = await fetch("/api/upload", {
  method: "POST",
  body: formData,
});

const result = await response.json();

console.log(result.image.url);`}
        />
        <p className="text-sm text-[var(--text-secondary)]">
          Do not manually set Content-Type when sending browser FormData.
          The browser automatically generates the multipart boundary.
        </p>
      </section>

      {/* 11. MongoDB */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. Store ImageKit Details in MongoDB</h2>
        <p className="text-[var(--text-secondary)]">
          Usually, we store the file URL and fileId in MongoDB instead
          of storing the actual image binary data.
        </p>
        <CodeBlock
          code={`const imageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  fileId: {
    type: String,
    required: true,
  },
  filePath: {
    type: String,
  },
});

const Image = mongoose.model("Image", imageSchema);`}
        />
        <p className="text-sm text-[var(--text-secondary)]">
          The URL is used to display the image. The fileId helps identify
          the asset for future management operations.
        </p>
      </section>

      {/* 12. Image Transformation */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">12. Image Transformation</h2>
        <p className="text-[var(--text-secondary)]">
          ImageKit can resize, crop, and convert images using URL
          transformations. These transformations generate optimized
          delivery URLs without requiring us to create separate files.
        </p>
        <CodeBlock
          code={`const optimizedUrl = imagekit.helper.buildSrc({
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
  src: "/my-app/photo.jpg",
  transformation: [
    {
      width: 400,
      height: 300,
      crop: "maintain_ratio",
      quality: 80,
      format: "webp",
    },
  ],
});

console.log(optimizedUrl);`}
        />
        <p className="text-sm text-[var(--text-secondary)]">
          Here, ImageKit generates a URL that requests a 400 × 300
          image in WebP format with quality 80.
        </p>
      </section>

      {/* 13. Authentication Parameters */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">13. Client-Side Upload Authentication</h2>
        <p className="text-[var(--text-secondary)]">
          Sometimes we want the frontend to upload files directly to
          ImageKit instead of sending the complete file through our
          backend. In this case, the backend generates temporary
          authentication parameters.
        </p>

        <CodeBlock
          code={`// Backend controller

export const getUploadAuth = (req, res) => {
  const authParams =
    imagekit.helper.getAuthenticationParameters();

  res.json({
    ...authParams,
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  });
};`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          The response contains token, expire, signature, and publicKey.
          The Private Key never leaves the backend.
        </p>

        <p className="text-sm font-medium text-[var(--accent-color)]">
          Frontend installation
        </p>
        <CodeBlock code={`npm install @imagekit/javascript`} />

        <CodeBlock
          code={`import { upload } from "@imagekit/javascript";

const authResponse = await fetch("/api/upload-auth");
const auth = await authResponse.json();

const result = await upload({
  file: selectedFile,
  fileName: selectedFile.name,
  token: auth.token,
  expire: auth.expire,
  signature: auth.signature,
  publicKey: auth.publicKey,
});

console.log(result.url);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Protect the authentication endpoint with your application's
          authentication and authorization middleware. Validate upload
          permissions and restrictions on the backend.
        </p>
      </section>

      {/* 14. Signed URLs */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">14. Signed URLs</h2>
        <p className="text-[var(--text-secondary)]">
          Signed URLs contain a signature that helps restrict access
          to protected media. They can also be configured with an
          expiration time.
        </p>
        <CodeBlock
          code={`const signedUrl = imagekit.helper.buildSrc({
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
  src: "/private/secret-image.jpg",
  signed: true,
  expiresIn: 3600,
});

console.log(signedUrl);`}
        />
        <p className="text-sm text-[var(--text-secondary)]">
          This example generates a signed delivery URL that expires
          after one hour. The asset must also be configured for
          restricted delivery.
        </p>
      </section>

      {/* 15. Cloudinary vs ImageKit */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">15. Cloudinary vs ImageKit</h2>
        <div className="overflow-x-auto rounded-lg border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3 text-left">Cloudinary</th>
                <th className="p-3 text-left">ImageKit</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Media management platform", "Media management platform"],
                ["Image and video transformations", "Image and video transformations"],
                ["Cloud media storage", "Cloud media storage"],
                ["CDN delivery", "CDN delivery"],
                ["Node.js SDK: cloudinary", "Node.js SDK: @imagekit/nodejs"],
              ].map(([cloudinary, imagekit]) => (
                <tr key={cloudinary} className="border-t border-[var(--border-color)]">
                  <td className="p-3 text-[var(--text-secondary)]">{cloudinary}</td>
                  <td className="p-3 text-[var(--text-secondary)]">{imagekit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-[var(--text-secondary)]">
          Both services provide cloud media storage, optimization,
          transformations, and delivery. The best choice depends on
          project requirements, pricing, and required features.
        </p>
      </section>

      {/* 16. Security */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">16. Security Best Practices</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Never expose the Private Key in frontend code.</li>
          <li>Store credentials in backend environment variables.</li>
          <li>Validate files before uploading them.</li>
          <li>Set file size and file count limits.</li>
          <li>Protect upload authentication endpoints.</li>
          <li>Use unique filenames where appropriate.</li>
          <li>Use signed URLs for restricted media delivery.</li>
          <li>Verify ownership before deleting or managing assets.</li>
        </ul>
      </section>

      {/* 17. Interview */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">17. Interview Questions</h2>

        {[
          {
            q: "What is ImageKit?",
            a: "ImageKit is a cloud-based platform used to upload, store, optimize, transform, and deliver media files.",
          },
          {
            q: "Why do we use ImageKit?",
            a: "It provides cloud media storage, image optimization, transformations, and CDN delivery.",
          },
          {
            q: "What is an ImageKit URL Endpoint?",
            a: "It is the base URL used to access and deliver media stored in ImageKit.",
          },
          {
            q: "What is the difference between Public Key and Private Key?",
            a: "The Public Key is used in client-side upload authentication, while the Private Key is kept secret on the backend for signing and secure operations.",
          },
          {
            q: "What is fileId?",
            a: "It is a unique identifier assigned to an uploaded file and used for file management.",
          },
          {
            q: "What is Image Transformation?",
            a: "It means resizing, cropping, changing formats, or optimizing media through delivery URL parameters.",
          },
          {
            q: "What are signed URLs?",
            a: "Signed URLs contain a cryptographic signature that helps restrict access to protected media.",
          },
          {
            q: "Why should we not expose the Private Key?",
            a: "Anyone who obtains the Private Key may be able to perform unauthorized server-side operations.",
          },
        ].map((item, index) => (
          <details
            key={index}
            className="group rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4"
          >
            <summary className="cursor-pointer font-medium">
              {index + 1}. {item.q}
            </summary>
            <p className="mt-3 text-sm text-[var(--text-secondary)]">
              {item.a}
            </p>
          </details>
        ))}
      </section>
    </div>
  );
}

export default ImageKit;