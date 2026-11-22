import CodeBlock from "../../../components/common/CodeBlock";

function Cloudinary() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          FILE HANDLING / 06
        </p>
        <h1 className="mt-2 text-3xl font-bold">Cloudinary</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          Cloudinary is a cloud-based media management platform used to
          upload, store, transform, optimize, and deliver images, videos,
          and other files. It allows applications to store media without
          managing their own file storage servers.
        </p>
      </div>

      {/* 1. Why Cloudinary */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Why Cloudinary?</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Store images and videos in cloud storage.</li>
          <li>Reduce the need for local server storage.</li>
          <li>Automatically optimize media delivery.</li>
          <li>Resize and transform images through URLs.</li>
          <li>Generate secure URLs for uploaded files.</li>
          <li>Delete or manage uploaded media using APIs.</li>
        </ul>
      </section>

      {/* 2. How it works */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. How Cloudinary Works</h2>

        <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <div className="space-y-2 text-center text-sm">
            {[
              "User selects an image or file",
              "Frontend sends file to Express backend",
              "Multer receives the uploaded file",
              "Backend uploads file to Cloudinary",
              "Cloudinary stores and processes the file",
              "Cloudinary returns the file URL",
              "Backend saves URL in MongoDB",
              "Frontend displays file using the URL",
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
        <h2 className="text-xl font-semibold">3. Create a Cloudinary Account</h2>
        <p className="text-[var(--text-secondary)]">
          Follow these steps to get your Cloudinary credentials.
        </p>

        <ol className="list-decimal space-y-3 pl-5 text-[var(--text-secondary)]">
          <li>
            Open the Cloudinary website and create an account.
          </li>
          <li>
            Log in to your Cloudinary dashboard.
          </li>
          <li>
            Open the API Keys section from your account settings.
          </li>
          <li>
            Find your Cloud Name, API Key, and API Secret.
          </li>
          <li>
            Copy these values and add them to your backend environment file.
          </li>
        </ol>

        <a
          href="https://cloudinary.com/users/register/free"
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-lg border border-[var(--border-color)] px-4 py-2 text-sm font-medium text-[var(--accent-color)] hover:bg-[var(--bg-secondary)]"
        >
          Create Cloudinary Account ↗
        </a>

        <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="font-semibold">Required Credentials</p>
          <ul className="mt-2 space-y-2 text-sm text-[var(--text-secondary)]">
            <li><strong>Cloud Name:</strong> Identifies your Cloudinary account.</li>
            <li><strong>API Key:</strong> Identifies your API credentials.</li>
            <li><strong>API Secret:</strong> Used for secure server-side authentication.</li>
          </ul>
        </div>
      </section>

      {/* 4. Installation */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Install Cloudinary</h2>
        <p className="text-[var(--text-secondary)]">
          Install the Cloudinary Node.js SDK in your backend project.
        </p>

        <CodeBlock code={`npm install cloudinary`} />
      </section>

      {/* 5. Environment Variables */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Configure Environment Variables</h2>
        <p className="text-[var(--text-secondary)]">
          Create a .env file in your backend root directory and add your
          Cloudinary credentials.
        </p>

        <CodeBlock
          code={`CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Never expose API Secret in frontend code or commit your .env
          file to GitHub. Add .env to .gitignore.
        </p>
      </section>

      {/* 6. Configuration */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Configure Cloudinary</h2>
        <p className="text-[var(--text-secondary)]">
          Create a separate configuration file to initialize Cloudinary.
        </p>

        <p className="text-sm font-medium text-[var(--accent-color)]">
          config/cloudinary.js
        </p>

        <CodeBlock
          code={`import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export default cloudinary;`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          The v2 import provides the Cloudinary SDK API used in these examples.
        </p>
      </section>

      {/* 7. Upload */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Upload a File to Cloudinary</h2>
        <p className="text-[var(--text-secondary)]">
          The uploader.upload() method uploads a local file to Cloudinary.
        </p>

        <CodeBlock
          code={`import cloudinary from "../config/cloudinary.js";

const result = await cloudinary.uploader.upload(
  "uploads/photo.jpg",
  {
    folder: "my-app",
  }
);

console.log(result.secure_url);
console.log(result.public_id);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Cloudinary returns information about the uploaded asset, including
          secure_url and public_id.
        </p>
      </section>

      {/* 8. Multer Integration */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Integrate Cloudinary with Multer</h2>
        <p className="text-[var(--text-secondary)]">
          In a typical Express application, Multer receives the file and
          Cloudinary stores it in the cloud.
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
          code={`import fs from "node:fs/promises";
import cloudinary from "../config/cloudinary.js";

export const uploadImage = async (req, res) => {
  let localPath;

  try {
    if (!req.file) {
      return res.status(400).json({
        message: "Please select an image",
      });
    }

    localPath = req.file.path;

    const result = await cloudinary.uploader.upload(
      localPath,
      {
        folder: "my-app",
        resource_type: "image",
      }
    );

    return res.status(201).json({
      message: "Image uploaded successfully",
      image: {
        url: result.secure_url,
        publicId: result.public_id,
      },
    });
  } catch (error) {
    console.error("Upload failed:", error);

    return res.status(500).json({
      message: "Image upload failed",
    });
  } finally {
    if (localPath) {
      await fs.unlink(localPath).catch((error) => {
        console.error("Temporary file cleanup failed:", error);
      });
    }
  }
};`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          After a successful upload, the temporary local file is deleted.
          The actual image remains stored on Cloudinary. If Cloudinary
          upload fails, the temporary file is also cleaned up.
        </p>
      </section>

      {/* 9. Routes */}
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
          code={`import uploadRoutes from "./routes/uploadRoutes.js";

app.use("/api", uploadRoutes);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          API endpoint: POST /api/upload
        </p>
      </section>

      {/* 10. Frontend */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Upload from React Frontend</h2>
        <p className="text-[var(--text-secondary)]">
          Send the selected file using FormData.
        </p>

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
          The browser automatically adds the multipart boundary.
        </p>
      </section>

      {/* 11. MongoDB */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. Store Cloudinary URL in MongoDB</h2>
        <p className="text-[var(--text-secondary)]">
          Usually, we store the Cloudinary URL and public_id in MongoDB,
          not the complete image file.
        </p>

        <CodeBlock
          code={`const imageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  publicId: {
    type: String,
    required: true,
  },
});

const Image = mongoose.model("Image", imageSchema);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          The URL is used to display the image, while public_id is useful
          for deleting or managing the asset later.
        </p>
      </section>

      {/* 12. Delete */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">12. Delete an Image from Cloudinary</h2>
        <p className="text-[var(--text-secondary)]">
          Use uploader.destroy() with the asset's public_id to delete it.
        </p>

        <CodeBlock
          code={`const result = await cloudinary.uploader.destroy(
  "my-app/example-image"
);

console.log(result);

// { result: "ok" }`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Always use the public_id returned by Cloudinary. After deleting
          the cloud asset, update or remove its corresponding MongoDB record.
          Verify that the authenticated user owns the asset before deletion.
        </p>
      </section>

      {/* 13. Image Transformation */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">13. Image Transformation</h2>
        <p className="text-[var(--text-secondary)]">
          Cloudinary can resize, crop, and optimize images through URL
          transformations without changing the original uploaded asset.
        </p>

        <CodeBlock
          code={`const imageUrl = cloudinary.url("my-app/example-image", {
  width: 300,
  height: 300,
  crop: "fill",
  gravity: "auto",
  quality: "auto",
  fetch_format: "auto",
  secure: true,
});

console.log(imageUrl);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          quality: "auto" selects an appropriate quality level, while
          fetch_format: "auto" can deliver an efficient supported format.
        </p>
      </section>

      {/* 14. Upload Methods */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">14. Different Upload Methods</h2>

        <div className="overflow-x-auto rounded-lg border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3 text-left">Method</th>
                <th className="p-3 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["upload()", "Upload a file using a path, URL, or supported data source."],
                ["upload_stream()", "Upload file data through a Node.js stream."],
                ["upload_chunked()", "Upload large files in multiple chunks."],
                ["upload_large()", "Upload large files using chunked upload behavior."],
                ["unsigned_upload()", "Upload using an unsigned upload preset."],
              ].map(([method, purpose]) => (
                <tr key={method} className="border-t border-[var(--border-color)]">
                  <td className="p-3 font-medium">{method}</td>
                  <td className="p-3 text-[var(--text-secondary)]">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 15. Security */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">15. Security Best Practices</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Never expose CLOUDINARY_API_SECRET in frontend code.</li>
          <li>Keep credentials in backend environment variables.</li>
          <li>Validate uploaded files before sending them to Cloudinary.</li>
          <li>Set file size and file count limits.</li>
          <li>Authenticate and authorize upload requests.</li>
          <li>Use unique asset identifiers when needed.</li>
          <li>Check asset ownership before deleting files.</li>
          <li>Use signed uploads for sensitive or restricted upload workflows.</li>
        </ul>
      </section>

      {/* 16. Interview */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">16. Interview Questions</h2>

        {[
          {
            q: "What is Cloudinary?",
            a: "Cloudinary is a cloud-based platform used to upload, store, transform, optimize, and deliver media files.",
          },
          {
            q: "Why do we use Cloudinary?",
            a: "It provides cloud storage, media optimization, transformations, and delivery without managing our own media storage infrastructure.",
          },
          {
            q: "What is a Cloud Name?",
            a: "It identifies a Cloudinary product environment.",
          },
          {
            q: "What is the difference between API Key and API Secret?",
            a: "API Key identifies API credentials, while API Secret is a private credential used for secure authentication and signing.",
          },
          {
            q: "What is secure_url?",
            a: "It is the HTTPS delivery URL returned by Cloudinary after an upload.",
          },
          {
            q: "What is public_id?",
            a: "It is the identifier used to reference and manage an uploaded asset in Cloudinary.",
          },
          {
            q: "Why do we store Cloudinary URLs in MongoDB?",
            a: "We store the URL to access the media and public_id to manage or delete the Cloudinary asset.",
          },
          {
            q: "How do we delete an image from Cloudinary?",
            a: "Use cloudinary.uploader.destroy() with the asset's public_id.",
          },
          {
            q: "What is the difference between signed and unsigned uploads?",
            a: "Signed uploads use server-generated authentication signatures. Unsigned uploads use an unsigned upload preset with restricted options.",
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

export default Cloudinary;