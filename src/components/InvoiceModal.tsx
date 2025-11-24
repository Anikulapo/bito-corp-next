"use client";
import { useState, useRef, DragEvent, ChangeEvent } from "react";
import { X, ChevronDown, Settings, Trash2, GripVertical } from "lucide-react";
import LogoUploader from "./LogoUploader";

type InvoiceModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function InvoiceModal({
  isOpen = false,
  onClose,
}: InvoiceModalProps) {
  const [showPreview, setShowPreview] = useState(false);
  const [templateStyle, setTemplateStyle] = useState("simple");
  const [fontStyle, setFontStyle] = useState("classic");
  const [paymentReceived, setPaymentReceived] = useState(false);
  const [markAsSent, setMarkAsSent] = useState(false);
  const [customizationOpen, setCustomizationOpen] = useState(true);
  const [recordOpen, setRecordOpen] = useState(true);
  const [issueDate, setIssueDate] = useState("2023-11-01");
  const [dueDate, setDueDate] = useState("");


  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Handle file upload via input or drag-and-drop
  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) setImagePreview(e.target.result as string);
    };
    reader.readAsDataURL(file);
  };

  // Input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFileUpload(file);
  };

  // Drag and drop
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileUpload(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  // Remove image
  const removeImage = () => {
    setImagePreview(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleClick = () => {
    onClose()
    removeImage()
  }


  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-40 flex items-center justify-center p-4 transition-all duration-300 ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Overlay */}
      <div
        onClick={handleClick}
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-30" : "opacity-0"
        }`}
      />

      {/* Modal container */}
      <div
        role="dialog"
        aria-modal="true"
        className={`bg-white rounded-2xl shadow-xl w-full max-w-6xl max-h-[720px] mx-auto z-50 overflow-auto flex flex-col transform transition-all duration-300 ease-out ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D5D5D5]">
          <h1 className="text-2xl font-semibold font-tt">Add a New Invoice</h1>
          <div className="flex items-center gap-3 font-robo font-bold text-[16px]">
            <button
              onClick={handleClick}
              className="px-3 py-1 text-primary cursor-pointer"
            >
              Cancel
            </button>
            <button
            onClick={()=> onClose()}
            className="px-4 py-2 text-brand  border border-brand  rounded-full cursor-pointer">
              Save as Draft
            </button>
            <button className="px-4 py-2 bg-brand text-white rounded-full hover:bg-indigo-700 flex items-center gap-1">
              Save and Sent
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left Panel - Form */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="border-[#AAADB1] border rounded-lg p-6">
              {/* Business Info Section */}
              <div className="flex justify-between mb-8">
                <LogoUploader handleDragOver={handleDragOver} handleDrop={handleDrop} handleFileChange={handleInputChange} image={imagePreview}  inputRef={inputRef as React.RefObject<HTMLInputElement>}/>
                <div className="text-right">
                  <p className="font-medium">Meng Design</p>
                  <p className="text-sm text-gray-600">+886123456789</p>
                  <p className="text-sm text-gray-600">
                    mengdesigntw@gmail.com
                  </p>
                  <p className="text-sm text-gray-600">Taiwan</p>
                  <button className="text-indigo-600 text-sm mt-2">
                    Edit business info
                  </button>
                </div>
              </div>

              {/* Amount Due */}
              <div className="text-right mb-6">
                <p className="text-sm text-gray-600 mb-1">Amount Due(USD)</p>
                <p className="text-4xl font-bold">$0.00</p>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Bill To<span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select className="w-full px-3 py-2 border rounded-lg appearance-none bg-white">
                      <option>Select or add a client</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Invoice Number<span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      defaultValue="00001"
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                    <Settings className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Issue Date<span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={issueDate}
                      onChange={(e) => setIssueDate(e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Purchase Order
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. PO #00023"
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Due Date<span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={dueDate}
                      onChange={(e) => setDueDate(e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Item Details Table */}
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr className="font-robo text-sm">
                      <th className="px-4 py-3 text-left text-sm font-medium text-secondary w-8"></th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-secondary">
                        Item Details
                      </th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-secondary w-24">
                        Qty
                      </th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-secondary w-32">
                        Rate
                      </th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-secondary w-32">
                        Discount
                      </th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-secondary w-24">
                        Amount
                      </th>
                      <th className="w-10"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="px-4 py-3">
                        <GripVertical className="w-4 h-4 text-gray-400" />
                      </td>
                      <td className="px-4 py-3">
                        <div className="relative">
                          <select className="w-full px-3 py-2 border rounded-lg appearance-none bg-white text-sm">
                            <option>Type or select an item</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="number"
                          defaultValue="0.00"
                          className="w-full px-3 py-2 border rounded-lg text-sm"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="number"
                          defaultValue="0.00"
                          className="w-full px-3 py-2 border rounded-lg text-sm"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          <input
                            type="number"
                            defaultValue="0"
                            className="w-16 px-3 py-2 border rounded-lg text-sm"
                          />
                          <div className="relative">
                            <select className="px-3 py-2 border rounded-lg appearance-none bg-white text-sm">
                              <option>%</option>
                            </select>
                            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm font-medium">$0.00</td>
                      <td className="px-4 py-3">
                        <button className="text-gray-400 hover:text-red-600">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Panel - Preview & Settings */}
          <div className="w-80 overflow-y-auto">
            <div className="p-4">
              {/* Preview Toggle */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-[#F6F7F8] dark:bg-[#262626] mb-3">
                <span className="text-[16px] font-bold font-robo">
                  Preview Invoice
                </span>
                <button
                  onClick={() => setShowPreview(!showPreview)}
                  className={`relative inline-flex h-4 w-6 items-center rounded-2xl transition-colors ${
                    showPreview ? "bg-brand" : "bg-primary"
                  }`}
                >
                  <span
                    className={`inline-block h-2 w-2 transform rounded-full bg-white transition-transform duration-500 ${
                      showPreview ? "translate-x-[13px]" : "translate-x-[3px]"
                    }`}
                  />
                </button>
              </div>

              {/* Customization Section */}
              <div className="mb-3 rounded-2xl bg-[#F6F7F8] dark:bg-[#262626] p-3">
                <button
                  onClick={() => setCustomizationOpen(!customizationOpen)}
                  className="flex font-tt items-center justify-between w-full text-left text-[20px] font-semibold mb-3"
                >
                  Customization
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      customizationOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {customizationOpen && (
                  <div className="space-y-4 font-trade">
                    <div className="flex justify-between items-center">
                      <label className="block text-[16px] mb-2">
                        Template style
                      </label>
                      <div className="flex gap-1 rounded-full bg-[#E1E3E6] p-1 ">
                        <button
                          onClick={() => setTemplateStyle("simple")}
                          className={`flex-1 px-2 py-1 text-[12px] rounded-full font-bold transition-all duration-300 ${
                            templateStyle === "simple"
                              ? "bg-white text-primary"
                              : "text-secondary dark:text-black"
                          }`}
                        >
                          Simple
                        </button>
                        <button
                          onClick={() => setTemplateStyle("modern")}
                          className={`flex-1 px-3 py-2 text-[12px] rounded-full font-bold transition-all duration-300 ${
                            templateStyle === "modern"
                              ? "bg-white text-primary"
                              : "text-secondary dark:text-black"
                          }`}
                        >
                          Modern
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <label className="block text-[16px] mb-2">Font</label>
                      <div className="flex gap-1 rounded-full bg-[#E1E3E6] p-1 ">
                        <button
                          onClick={() => setFontStyle("classic")}
                          className={`flex-1 px-2 py-1 text-[12px] rounded-full font-bold transition-all duration-300 ${
                            fontStyle === "classic"
                              ? "bg-white text-primary"
                              : "text-secondary dark:text-black"
                          }`}
                        >
                          Classic
                        </button>
                        <button
                          onClick={() => setFontStyle("modern")}
                          className={`flex-1 px-3 py-2 text-[12px] rounded-full font-bold transition-all duration-300 ${
                            fontStyle === "modern"
                              ? "bg-white text-primary"
                              : "text-secondary dark:text-black"
                          }`}
                        >
                          Modern
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Record Section */}
              <div className="rounded-2xl bg-[#F6F7F8] dark:bg-[#262626] p-3">
                <button
                  onClick={() => setRecordOpen(!recordOpen)}
                  className="flex items-center justify-between w-full text-left font-medium mb-3"
                >
                  Record the invoice
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      recordOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {recordOpen && (
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={paymentReceived}
                        onChange={(e) => setPaymentReceived(e.target.checked)}
                        className="w-4 h-4 rounded border-gray-300"
                      />
                      <span className="text-sm">
                        I have received the payment
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={markAsSent}
                        onChange={(e) => setMarkAsSent(e.target.checked)}
                        className="w-4 h-4 rounded border-gray-300"
                      />
                      <span className="text-sm">Mark it as sent</span>
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
