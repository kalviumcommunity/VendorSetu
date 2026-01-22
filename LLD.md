#  VendorSetu
####  Low Level Design (LLD)  


##  1. Overview

The Railway Vendor License Management System (RVLMS) is a role-based web application designed to digitize vendor onboarding, license issuance, renewal, compliance tracking, and support operations.

The system replaces traditional paper-based workflows with a centralized digital platform that is transparent, trackable, and efficient. It ensures better control, faster processing, and improved compliance management.

### System Roles

| Role | Responsibilities |
|------|-----------------|
| **Vendor** | • Applies for license issuance and renewal<br/>• Requests license updates<br/>• Views license details and status<br/>• Raises support tickets |
| **Admin** | • Verifies vendor information<br/>• Approves or rejects license requests<br/>• Manages licenses, inspections, and vendors<br/>• Monitors system-level KPIs |

---

##  2. System Architecture

### 2.1 Architecture Overview

RVLMS follows a **layered web architecture** with clear separation of responsibilities.

```
┌─────────────────────────────────────┐
│  Frontend (Vendor / Admin UI)       │
└────────────────┬────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────┐
│     Backend API Layer               │
└────────────────┬────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────┐
│             Logic Layer             │
└────────────────┬────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────┐
│   Data & Storage Layer              │
└─────────────────────────────────────┘
```

**Benefits:** Improved maintainability, scalability, and security.

---

### 2.2 Technology Stack

| Component | Technology |
|-----------|-----------|
| **Frontend** | React (Role-based dashboards) |
| **Backend** | Node.js + Express.js (REST APIs) |
| **Database** | MySQL |
| **Authentication** | JWT with Role-Based Access Control (RBAC) |
| **File Storage** | Local / Cloud storage |
| **Notifications** | Email / In-app notifications |

---

### 2.3 File & Folder Structure

**Project Root Directory:**

```
VendorSetu/
│
├── 📁 frontend/
│   ├── 📁 public/
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   └── logo.png
│   │
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── LicenseForm.jsx
│   │   │   └── TicketForm.jsx
            └── Notifications.jsx
│   │   │
│   │   ├── 📁 pages/
│   │   │   ├── VendorDashboard.jsx
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── License.jsx
│   │   │   ├── Vendors.jsx
│   │   │   └── Issues.jsx
│   │   │
│   │   ├── 📁 services/
│   │   │   ├── api.js
│   │   │   ├── authService.js
│   │   │   ├── licenseService.js
│   │   │   └── vendorService.js
│   │   │
│   │   ├── 📁 utils/
│   │   │   ├── constants.js
│   │   │   ├── validators.js
│   │   │   └── helpers.js
│   │   │
│   │   ├── 📁 styles/
│   │   │   ├── global.css
│   │   │   ├── theme.css
│   │   │   └── responsive.css
│   │   │
│   │   ├── App.jsx
│   │   └── index.js
│   │
│   ├── package.json
│   ├── .env.example
│   └── README.md
│
├── 📁 backend/
│   ├── 📁 src/
│   │   ├── 📁 controllers/
│   │   │   ├── authController.js
│   │   │   ├── vendorController.js
│   │   │   ├── licenseController.js
│   │   │   ├── adminController.js
│   │   │   ├── ticketController.js
│   │   │   └── inspectionController.js
│   │   │
│   │   ├── 📁 routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── vendorRoutes.js
│   │   │   ├── adminRoutes.js
│   │   │   └── index.js
│   │   │
│   │   ├── 📁 models/
│   │   │   ├── User.js
│   │   │   ├── Vendor.js
│   │   │   ├── License.js
│   │   │   ├── LicenseRequest.js
│   │   │   ├── SupportTicket.js
│   │   │   ├── Inspection.js
│   │   │   └── index.js
│   │   │
│   │   ├── 📁 middleware/
│   │   │   ├── authMiddleware.js
│   │   │   ├── rbacMiddleware.js
│   │   │   ├── errorHandler.js
│   │   │   └── validation.js
│   │   │
│   │   ├── 📁 services/
│   │   │   ├── licenseService.js
│   │   │   ├── vendorService.js
│   │   │   ├── emailService.js
│   │   │   └── fileService.js
│   │   │
│   │   ├── 📁 utils/
│   │   │   ├── constants.js
│   │   │   ├── logger.js
│   │   │   ├── jwt.js
│   │   │   └── encryption.js
│   │   │
│   │   ├── 📁 config/
│   │   │   ├── database.js
│   │   │   ├── environment.js
│   │   │   └── mail.js
│   │   │
│   │   └── server.js
│   │
│   ├── 📁 migrations/
│   │   ├── 001_create_users_table.js
│   │   ├── 002_create_vendors_table.js
│   │   ├── 003_create_licenses_table.js
│   │   ├── 004_create_license_requests_table.js
│   │   └── 005_create_support_tickets_table.js
│   │
│   ├── 📁 seeds/
│   │   ├── seedUsers.js
│   │   └── seedData.js
│   │
│   ├── package.json
│   ├── .env.example
│   └── README.md
│
├── 📁 database/
│   ├── 📁 schemas/
│   │   ├── users.sql
│   │   ├── vendors.sql
│   │   ├── licenses.sql
│   │   ├── license_requests.sql
│   │   ├── support_tickets.sql
│   │   └── inspections.sql
│   │
│   └── 📁 backups/
│       └── backup_2026_01.sql
│
├── 📁 docs/
│   ├── API_DOCUMENTATION.md
│   ├── DATABASE_SCHEMA.md
│   ├── SETUP_GUIDE.md
│   └── USER_GUIDE.md
│
├── 📁 tests/
│   ├── 📁 unit/
│   │   ├── authController.test.js
│   │   └── licenseService.test.js
│   │
│   └── 📁 integration/
│       └── api.test.js
│
├── .gitignore
├── docker-compose.yml
├── package.json (root)
└── README.md
```

**Key Directory Purposes:**

| Directory | Purpose |
|-----------|---------|
| **frontend/src/components** | Reusable React components |
| **frontend/src/pages** | Full page components |
| **frontend/src/services** | API client & business logic |
| **backend/src/controllers** | Request handlers & response logic |
| **backend/src/routes** | API endpoint definitions |
| **backend/src/models** | Database models & schemas |
| **backend/src/middleware** | Authentication, validation, error handling |
| **backend/src/services** | Business logic & external integrations |
| **database/schemas** | SQL table definitions |
| **docs** | Documentation & guides |
| **tests** | Unit & integration tests |

---

##  3. Role-Based Access Control (RBAC)

RBAC ensures users can only access features allowed for their role.

| Role | Permissions |
|------|------------|
| **Vendor** | Apply license, request updates, view license, raise tickets |
| **Admin** | Approve/reject licenses, manage vendors, inspections |

> **Implementation:** RBAC is enforced using JWT middleware at the API level.

---

##  4. Application Layer Design

The application layer acts as the **control center** of the system.

```
┌──────────────────────────────────┐
│    Client Request                │
└────────────┬─────────────────────┘
             │
             ▼
┌──────────────────────────────────┐
│    API Routes                    │
└────────────┬─────────────────────┘
             │
             ▼
┌──────────────────────────────────┐
│  JWT & Role Validation           │
└────────────┬─────────────────────┘
             │
             ▼
┌──────────────────────────────────┐
│             Logic                │
└────────────┬─────────────────────┘
             │
             ▼
┌──────────────────────────────────┐
│  Database Operations             │
└──────────────────────────────────┘
```

### 4.1 API Design

#### 🔑 Authentication APIs
```
POST    /auth/login
POST    /auth/logout
```

#### 👤 Vendor APIs
```
POST    /vendor/license/apply
POST    /vendor/license/update
GET     /vendor/license
POST    /vendor/ticket
```

#### 🛠️ Admin APIs
```
GET     /admin/vendors
GET     /admin/license-requests
POST    /admin/license/approve
POST    /admin/license/reject
GET     /admin/licenses
POST    /admin/inspection
```

---

### 4.2 Business Logic Layer

**Responsibilities:**
- License validation rules
- Approval workflows
- Status transitions (PENDING → APPROVED → ACTIVE)
- Preventing invalid actions
- Ensuring data consistency

```
┌──────────────────────────────────┐
│    Request                       │
└────────────┬─────────────────────┘
             │
             ▼
┌──────────────────────────────────┐
│    Validation                    │
└────────────┬─────────────────────┘
             │
             ▼
┌──────────────────────────────────┐
│    Role Check                    │
└────────────┬─────────────────────┘
             │
             ▼
┌──────────────────────────────────┐
│  State Transition                │
└────────────┬─────────────────────┘
             │
             ▼
┌──────────────────────────────────┐
│  Database Update                 │
└──────────────────────────────────┘
```

##  5. Database Design 

### 5.1 Core Tables

#### 👤 Users Table
```sql
users (
  id INT PK AUTO_INCREMENT,
  role ENUM('VENDOR','ADMIN'),
  email VARCHAR(100) UNIQUE,
  password_hash VARCHAR(255),
  created_at TIMESTAMP
)
```

#### 🏢 Vendors Table
```sql
vendors (
  id INT PK AUTO_INCREMENT,
  user_id INT FK,
  name VARCHAR(100),
  dob DATE,
  phone VARCHAR(15),
  aadhaar VARCHAR(12),
  pan VARCHAR(10),
  address TEXT,
  photo_url VARCHAR(255),
  created_at TIMESTAMP
)
```

#### 📋 License Requests Table
```sql
license_requests (
  id INT PK AUTO_INCREMENT,
  vendor_id INT FK,
  request_type ENUM('ISSUE','UPDATE','RENEW'),
  status ENUM('PENDING','APPROVED','REJECTED'),
  requested_changes JSON,
  created_at TIMESTAMP
)
```

#### 📜 Licenses Table
```sql
licenses (
  id INT PK AUTO_INCREMENT,
  license_uid VARCHAR(50) UNIQUE,
  vendor_id INT FK,
  issue_date DATE,
  expiry_date DATE,
  status ENUM('ACTIVE','EXPIRED','REVOKED'),
  created_at TIMESTAMP
)
```

#### 🎫 Support Tickets Table
```sql
support_tickets (
  id INT PK AUTO_INCREMENT,
  vendor_id INT FK,
  subject VARCHAR(100),
  description TEXT,
  status ENUM('OPEN','IN_PROGRESS','RESOLVED'),
  created_at TIMESTAMP
)
```

#### ✅ Inspections Table
```sql
inspections (
  id INT PK AUTO_INCREMENT,
  vendor_id INT FK,
  inspection_date DATE,
  remarks TEXT,
  status ENUM('PASSED','FAILED','PENDING'),
  created_at TIMESTAMP
)
```
---

##  6. Vendor Module 

### 6.1 Vendor Dashboard

**Components:**

| Component | Details |
|-----------|---------|
| **License Summary** | License ID, issue date, expiry date, status |

**Available Actions:**
- ✓ Apply for License
- ✓ Request Update / Renewal
- ✓ Raise Support Ticket

---

### 6.2 License Application Flow

```
┌──────────────┐
│    Vendor    │
└──────┬───────┘
       │
       ▼
┌──────────────────────────────────┐
│    Fill Form                     │
└──────┬───────────────────────────┘
       │
       ▼
┌──────────────────────────────────┐
│  Frontend Validation             │
└──────┬───────────────────────────┘
       │
       ▼
┌──────────────────────────────────┐
│ License Request Stored (PENDING) │
└──────┬───────────────────────────┘
       │
       ▼
┌──────────────────────────────────┐
│   Admin Notification             │
└──────────────────────────────────┘
```



---

### 6.3 License Update Flow

```
┌──────────────┐
│    Vendor    │
└──────┬───────┘
       │
       ▼
┌──────────────────────────────────┐
│  Submit Update Request           │
└──────┬───────────────────────────┘
       │
       ▼
┌──────────────────────────────────┐
│   Changes Stored as JSON         │
└──────┬───────────────────────────┘
       │
       ▼
┌──────────────────────────────────┐
│      Admin Review                │
└──────┬───────────────────────────┘
       │
       ▼
┌──────────────────────────────────┐
│  Vendor/License Updated          │
└──────────────────────────────────┘
```

---

### 6.4 Support Ticket Flow

```
┌──────────────┐
│    Vendor    │
└──────┬───────┘
       │
       ▼
┌──────────────────────────────────┐
│    Raise Ticket                  │
└──────┬───────────────────────────┘
       │
       ▼
┌──────────────────────────────────┐
│    Ticket Stored                 │
└──────┬───────────────────────────┘
       │
       ▼
┌──────────────────────────────────┐
│   Admin Updates Status           │
└──────┬───────────────────────────┘
       │
       ▼
┌──────────────────────────────────┐
│  Vendor Receives Update          │
└──────────────────────────────────┘
```
---

##  7. Admin Module – Low Level Design

### 7.1 Admin Dashboard

**KPI Cards:**

| Metric | Description |
|--------|-------------|
| 📊 Total Vendors | Count of all registered vendors |
| 📄 Issued Licenses | Number of active licenses |
| ⏳ Pending Licenses | Awaiting admin approval |
| ⚠️ Expired Licenses | Licenses past expiry date |

**Recent Vendor Table:**

| Column | Purpose |
|--------|---------|
| Vendor Name | Vendor identification |
| License ID | Unique license identifier |
| Issue Date | License issuance date |
| Expiry Date | License expiration date |

---

### 7.2 License Approval Flow

```
┌──────────────┐
│    Admin     │
└──────┬───────┘
       │
       ▼
┌──────────────────────────────────┐
│  View Pending Requests           │
└──────┬───────────────────────────┘
       │
       ▼
┌──────────────────────────────────┐
│    Review Details                │
└──────┬───────────────────────────┘
       │
       ├─────────────────────────────┐
       ▼                             ▼
┌──────────────────┐      ┌──────────────────┐
│     Approve      │      │      Reject      │
└──────┬───────────┘      └──────┬───────────┘
       │                         │
       ▼                         ▼
┌──────────────────────────────────────────┐
│  License Generated (If Approved)         │
└──────┬───────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────────────┐
│         Vendor Notified                  │
└──────────────────────────────────────────┘
```

---

### 7.3 Inspection Management

**Process Steps:**

1.  Schedule inspections
2.  Record inspection results
3.  Link inspection to vendor

**Inspection Status:**
- ✓ PASSED
- ✗ FAILED
- ⏳ PENDING

---

##  8. Security Considerations

| Security Layer | Implementation |
|---|---|
| **JWT Authentication** | Stored in HTTP-only cookies |
| **Data Encryption** | Sensitive data encrypted at rest |
| **Access Control** | Role-based middleware enforcement |
| **Audit Trail** | Complete logs for admin actions |

> **Security First:** Every request goes through JWT validation before accessing any resource.

---



