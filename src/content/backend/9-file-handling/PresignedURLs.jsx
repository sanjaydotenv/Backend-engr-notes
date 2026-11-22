import CodeBlock from "../../../components/common/CodeBlock";

function PresignedURLs() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          FILE HANDLING / 09
        </p>
        <h1 className="mt-2 text-3xl font-bold">Presigned URLs</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          A Presigned URL is a temporary URL that provides permission to
          perform a specific operation on a private cloud storage object.
          It allows users to upload or download files without exposing
          cloud storage credentials.
        </p>
      </div>

      {/* 1. What is Presigned URL */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is a Presigned URL?</h2>
        <p className="text-[var(--text-secondary)]">
          Normally, only authorized applications can access private
          cloud storage. A presigned URL allows someone to perform
          a specific operation for a limited time without directly
          having cloud credentials.
        </p>

        <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="font-semibold">Example</p>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            Imagine a user wants to upload a profile picture to AWS S3.
            Instead of sending the complete file through your backend,
            your backend generates a temporary upload URL. The frontend
            uploads the file directly to S3 using that URL.
          </p>
        </div>
      </section>

      {/* 2. Why Presigned URLs */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Why Use Presigned URLs?</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Upload files directly from frontend to cloud storage.</li>
          <li>Avoid exposing AWS secret credentials.</li>
          <li>Reduce unnecessary load on the backend server.</li>
          <li>Provide temporary access to private files.</li>
          <li>Control how long a URL remains valid.</li>
          <li>Support secure file sharing and downloads.</li>
        </ul>
      </section>

      {/* 3. How it works */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. How Presigned URLs Work</h2>

        <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <div className="space-y-2 text-center text-sm">
            {[
              "User selects a file",
              "Frontend requests an upload URL from backend",
              "Backend authenticates the user",
              "Backend generates a presigned URL using AWS credentials",
              "Backend sends the temporary URL to frontend",
              "Frontend uploads the file directly to AWS S3",
              "Frontend or backend saves file details in MongoDB",
            ].map((step, index) => (
              <div key={step}>
                <div className="rounded-md border border-[var(--border-color)] p-3">
                  <span className="font-semibold text-[var(--accent-color)]">
                    {index + 1}.{" "}
                  </span>
                  {step}
                </div>
                {index !== 6 && (
                  <div className="py-1 text-[var(--accent-color)]">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Types */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Types of Presigned URLs</h2>

        <div className="overflow-x-auto rounded-lg border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3 text-left">Type</th>
                <th className="p-3 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Upload URL", "Allows uploading a file to cloud storage."],
                ["Download URL", "Allows temporarily downloading a private file."],
              ].map(([type, purpose]) => (
                <tr key={type} className="border-t border-[var(--border-color)]">
                  <td className="p-3 font-medium">{type}</td>
                  <td className="p-3 text-[var(--text-secondary)]">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. AWS Setup */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Create AWS S3 Bucket</h2>
        <p className="text-[var(--text-secondary)]">
          We will use Amazon S3 as cloud storage in this example.
        </p>

        <ol className="list-decimal space-y-3 pl-5 text-[var(--text-secondary)]">
          <li>Create or log in to your AWS account.</li>
          <li>Open the Amazon S3 service.</li>
          <li>Click Create bucket.</li>
          <li>Enter a globally unique bucket name.</li>
          <li>Select your preferred AWS region.</li>
          <li>Keep Block Public Access enabled.</li>
          <li>Create the bucket.</li>
          <li>Create an IAM identity with only the required S3 permissions.</li>
          <li>Configure AWS credentials securely on your backend.</li>
        </ol>

        <a
          href="https://console.aws.amazon.com/s3/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-lg border border-[var(--border-color)] px-4 py-2 text-sm font-medium text-[var(--accent-color)] hover:bg-[var(--bg-secondary)]"
        >
          Open AWS S3 Console ↗
        </a>

        <p className="text-sm text-[var(--text-secondary)]">
          A private bucket is recommended. A presigned URL provides
          temporary access without making the entire bucket public.
        </p>
      </section>

      {/* 6. Install */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Install AWS SDK</h2>
        <p className="text-[var(--text-secondary)]">
          Install AWS SDK v3 packages in your Node.js backend.
        </p>

        <CodeBlock
          code={`npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          client-s3 provides S3 operations, while s3-request-presigner
          generates presigned URLs.
        </p>
      </section>

      {/* 7. Environment */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Configure Environment Variables</h2>

        <CodeBlock
          code={`AWS_REGION=ap-south-1
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_S3_BUCKET=your_bucket_name`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Never expose AWS_SECRET_ACCESS_KEY in frontend code.
          For production, prefer IAM roles or temporary credentials
          instead of long-lived access keys.
        </p>
      </section>

      {/* 8. S3 Configuration */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Configure S3 Client</h2>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          config/s3.js
        </p>

        <CodeBlock
          code={`import { S3Client } from "@aws-sdk/client-s3";
import "dotenv/config";

const s3 = new S3Client({
  region: process.env.AWS_REGION,
});

export default s3;`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          The AWS SDK can automatically load credentials from its
          configured credential provider chain, including environment
          variables and IAM roles.
        </p>
      </section>

      {/* 9. Generate Upload URL */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Generate Upload Presigned URL</h2>
        <p className="text-[var(--text-secondary)]">
          PutObjectCommand defines the upload operation. getSignedUrl()
          creates a temporary URL for that operation.
        </p>

        <p className="text-sm font-medium text-[var(--accent-color)]">
          services/presignedUrl.js
        </p>

        <CodeBlock
          code={`import { randomUUID } from "node:crypto";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import s3 from "../config/s3.js";

export const generateUploadUrl = async ({
  contentType,
}) => {
  const key = \`uploads/\${randomUUID()}\`;

  const command = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET,
    Key: key,
    ContentType: contentType,
  });

  const uploadUrl = await getSignedUrl(s3, command, {
    expiresIn: 300,
  });

  return {
    uploadUrl,
    key,
  };
};`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          expiresIn: 300 means the generated URL is valid for up to
          5 minutes, subject to AWS credential and policy limits.
          The Key identifies the destination object in S3.
        </p>
      </section>

      {/* 10. Express API */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Create Upload API</h2>
        <p className="text-[var(--text-secondary)]">
          Create an endpoint that generates an upload URL for an
          authenticated user.
        </p>

        <p className="text-sm font-medium text-[var(--accent-color)]">
          controllers/uploadController.js
        </p>

        <CodeBlock
          code={`import { generateUploadUrl } from "../services/presignedUrl.js";

const allowedTypes = [
  "image/jpeg",
  "image/png",
  "image/webp",
];

export const getUploadUrl = async (req, res) => {
  try {
    const { contentType } = req.body;

    if (!allowedTypes.includes(contentType)) {
      return res.status(400).json({
        message: "Invalid file type",
      });
    }

    const result = await generateUploadUrl({
      contentType,
    });

    return res.status(200).json({
      message: "Upload URL generated",
      ...result,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Unable to generate upload URL",
    });
  }
};`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          This endpoint should be protected by authentication middleware.
          The allowed MIME type check is only an initial check;
          validate actual file content and size as part of your upload
          security strategy.
        </p>
      </section>

      {/* 11. Routes */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. Create Express Route</h2>

        <CodeBlock
          code={`import express from "express";
import { getUploadUrl } from "../controllers/uploadController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post(
  "/upload-url",
  authMiddleware,
  getUploadUrl
);

export default router;`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Example endpoint: POST /api/upload-url
        </p>
      </section>

      {/* 12. Frontend Upload */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">12. Upload File from React</h2>
        <p className="text-[var(--text-secondary)]">
          First request the presigned URL from the backend. Then
          upload the file directly to S3 using HTTP PUT.
        </p>

        <CodeBlock
          code={`const uploadFile = async (file) => {
  // Step 1: Request upload URL
  const response = await fetch("/api/upload-url", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: \`Bearer \${accessToken}\`,
    },
    body: JSON.stringify({
      contentType: file.type,
    }),
  });

  if (!response.ok) {
    throw new Error("Unable to generate upload URL");
  }

  const { uploadUrl, key } = await response.json();

  // Step 2: Upload directly to S3
  const uploadResponse = await fetch(uploadUrl, {
    method: "PUT",
    headers: {
      "Content-Type": file.type,
    },
    body: file,
  });

  if (!uploadResponse.ok) {
    throw new Error("File upload failed");
  }

  return { key };
};`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          The Content-Type sent during the PUT request must match
          the ContentType used while generating the presigned URL.
          The browser sends the file directly to S3, not through Express.
        </p>
      </section>

      {/* 13. Download URL */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">13. Generate Download Presigned URL</h2>
        <p className="text-[var(--text-secondary)]">
          GetObjectCommand generates a temporary URL that allows
          downloading an existing private S3 object.
        </p>

        <CodeBlock
          code={`import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import s3 from "../config/s3.js";

export const generateDownloadUrl = async (key) => {
  const command = new GetObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET,
    Key: key,
  });

  const downloadUrl = await getSignedUrl(s3, command, {
    expiresIn: 300,
  });

  return downloadUrl;
};`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          The user can access the private file using this URL for
          a limited time, as long as the URL and its underlying
          credentials and permissions remain valid.
        </p>
      </section>

      {/* 14. Download API */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">14. Create Download API</h2>

        <CodeBlock
          code={`import { generateDownloadUrl } from "../services/downloadUrl.js";

export const getDownloadUrl = async (req, res) => {
  try {
    const { key } = req.body;

    // Verify that the authenticated user owns this file.
    const file = await File.findOne({
      key,
      user: req.user.id,
    });

    if (!file) {
      return res.status(404).json({
        message: "File not found",
      });
    }

    const downloadUrl = await generateDownloadUrl(key);

    return res.status(200).json({
      downloadUrl,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Unable to generate download URL",
    });
  }
};`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          File is an example MongoDB model. Never trust a client-provided
          storage key without checking ownership and permissions.
        </p>
      </section>

      {/* 15. Save MongoDB */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">15. Store File Details in MongoDB</h2>
        <p className="text-[var(--text-secondary)]">
          After a successful upload, store the file key and related
          information in MongoDB.
        </p>

        <CodeBlock
          code={`const fileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  key: {
    type: String,
    required: true,
    unique: true,
  },
  originalName: String,
  contentType: String,
  size: Number,
});

const File = mongoose.model("File", fileSchema);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Store the storage key instead of relying on a temporary
          presigned URL. Generate a new download URL whenever access
          is needed.
        </p>
      </section>

      {/* 16. S3 CORS */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">16. Configure S3 CORS</h2>
        <p className="text-[var(--text-secondary)]">
          When the browser uploads directly to S3, the bucket must
          allow requests from your frontend origin.
        </p>

        <CodeBlock
          code={`[
  {
    "AllowedOrigins": [
      "http://localhost:5173"
    ],
    "AllowedMethods": [
      "PUT"
    ],
    "AllowedHeaders": [
      "Content-Type"
    ],
    "ExposeHeaders": [
      "ETag"
    ],
    "MaxAgeSeconds": 3000
  }
]`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Add this configuration in your S3 bucket's Permissions
          section under Cross-origin resource sharing (CORS).
          Replace localhost with your actual frontend domain in production.
        </p>
      </section>

      {/* 17. Expiration */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">17. URL Expiration</h2>

        <p className="text-[var(--text-secondary)]">
          A presigned URL is temporary. Its expiration is controlled
          by expiresIn when generating the URL, but AWS credentials
          and bucket policies can cause it to become invalid earlier.
        </p>

        <div className="overflow-x-auto rounded-lg border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3 text-left">expiresIn</th>
                <th className="p-3 text-left">Duration</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["60", "1 minute"],
                ["300", "5 minutes"],
                ["1800", "30 minutes"],
                ["3600", "1 hour"],
              ].map(([seconds, duration]) => (
                <tr key={seconds} className="border-t border-[var(--border-color)]">
                  <td className="p-3 font-medium">{seconds} seconds</td>
                  <td className="p-3 text-[var(--text-secondary)]">{duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 18. Security */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">18. Security Best Practices</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Never expose AWS Secret Access Key.</li>
          <li>Keep S3 buckets private.</li>
          <li>Generate URLs only after authenticating users.</li>
          <li>Set short expiration times.</li>
          <li>Use random and unique object keys.</li>
          <li>Restrict IAM permissions to required buckets and operations.</li>
          <li>Validate file types and sizes on the backend.</li>
          <li>Verify file ownership before generating download URLs.</li>
          <li>Never trust a file's existence or contents just because an upload URL was used.</li>
          <li>Remember that anyone possessing a valid presigned URL can use it until it expires or becomes invalid.</li>
        </ul>
      </section>

      {/* 19. Comparison */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">19. Backend Upload vs Presigned URL</h2>

        <div className="overflow-x-auto rounded-lg border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3 text-left">Backend Upload</th>
                <th className="p-3 text-left">Presigned Upload</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["File passes through backend", "File goes directly to cloud storage"],
                ["Backend handles file transfer", "Backend only generates upload permission"],
                ["More backend bandwidth usage", "Less backend bandwidth usage"],
                ["Backend can inspect file during upload", "Backend must verify uploaded object separately"],
              ].map(([backend, presigned]) => (
                <tr key={backend} className="border-t border-[var(--border-color)]">
                  <td className="p-3 text-[var(--text-secondary)]">{backend}</td>
                  <td className="p-3 text-[var(--text-secondary)]">{presigned}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 20. Interview */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">20. Interview Questions</h2>

        {[
          {
            q: "What is a Presigned URL?",
            a: "A temporary URL that allows a specific operation on a private cloud storage object without exposing cloud credentials.",
          },
          {
            q: "Why do we use Presigned URLs?",
            a: "They allow secure direct uploads and downloads while reducing unnecessary backend file-transfer work.",
          },
          {
            q: "What is the difference between upload and download URLs?",
            a: "An upload URL allows writing an object, while a download URL allows reading an existing object.",
          },
          {
            q: "What is PutObjectCommand?",
            a: "It is an AWS SDK command used to upload an object to an S3 bucket.",
          },
          {
            q: "What is GetObjectCommand?",
            a: "It is an AWS SDK command used to retrieve an object from an S3 bucket.",
          },
          {
            q: "What is getSignedUrl()?",
            a: "It is a helper from the AWS SDK presigner package that generates a presigned URL for an S3 command.",
          },
          {
            q: "Do presigned URLs require AWS credentials on the frontend?",
            a: "No. The backend signs the URL using AWS credentials and sends the temporary URL to the frontend.",
          },
          {
            q: "Can a presigned URL be used after expiration?",
            a: "No. Once it expires or becomes invalid, the request is rejected. A new URL must be generated.",
          },
          {
            q: "Why should we keep an S3 bucket private?",
            a: "A private bucket prevents unrestricted public access. Users can receive temporary access through authorized presigned URLs.",
          },
          {
            q: "What is the role of S3 CORS?",
            a: "It controls which browser origins can make cross-origin requests to the S3 bucket. It does not replace AWS authorization.",
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

export default PresignedURLs;