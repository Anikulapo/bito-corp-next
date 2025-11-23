"use client";
import { useState } from 'react';
import { X, ChevronDown, Calendar, Settings, Trash2, GripVertical } from 'lucide-react';

export default function InvoiceModal() {
  const [showPreview, setShowPreview] = useState(false);
  const [templateStyle, setTemplateStyle] = useState('simple');
  const [fontStyle, setFontStyle] = useState('classic');
  const [paymentReceived, setPaymentReceived] = useState(false);
  const [markAsSent, setMarkAsSent] = useState(false);
  const [customizationOpen, setCustomizationOpen] = useState(true);
  const [recordOpen, setRecordOpen] = useState(true);
  const [issueDate, setIssueDate] = useState('2023-11-01');
  const [dueDate, setDueDate] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl mx-auto overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h1 className="text-2xl font-semibold">Add a New Invoice</h1>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              Cancel
            </button>
            <button className="px-4 py-2 text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg">
              Save as Draft
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2">
              Save and Send
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left Panel - Form */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="border rounded-lg p-6">
              {/* Business Info Section */}
              <div className="flex justify-between mb-8">
                <div className="w-64 h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-500">
                  <p className="text-sm">Drag your Logo here,</p>
                  <p className="text-sm">
                    or <span className="text-indigo-600 cursor-pointer">select a file</span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">Meng Design</p>
                  <p className="text-sm text-gray-600">+886123456789</p>
                  <p className="text-sm text-gray-600">mengdesigntw@gmail.com</p>
                  <p className="text-sm text-gray-600">Taiwan</p>
                  <button className="text-indigo-600 text-sm mt-2">Edit business info</button>
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
                  <label className="block text-sm font-medium mb-2">Purchase Order</label>
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
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 w-8"></th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Item Details</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 w-24">Qty</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 w-32">Rate</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 w-32">Discount</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 w-24">Amount</th>
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
          <div className="w-80 border-l bg-gray-50 overflow-y-auto">
            <div className="p-4">
              {/* Preview Toggle */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium">Preview Invoice</span>
                <button
                  onClick={() => setShowPreview(!showPreview)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    showPreview ? 'bg-indigo-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      showPreview ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Customization Section */}
              <div className="mb-4">
                <button
                  onClick={() => setCustomizationOpen(!customizationOpen)}
                  className="flex items-center justify-between w-full text-left font-medium mb-3"
                >
                  Customization
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      customizationOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {customizationOpen && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm mb-2">Template style</label>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setTemplateStyle('simple')}
                          className={`flex-1 px-3 py-2 text-sm rounded-lg border ${
                            templateStyle === 'simple'
                              ? 'bg-indigo-50 border-indigo-600 text-indigo-600'
                              : 'bg-white border-gray-300'
                          }`}
                        >
                          Simple
                        </button>
                        <button
                          onClick={() => setTemplateStyle('modern')}
                          className={`flex-1 px-3 py-2 text-sm rounded-lg border ${
                            templateStyle === 'modern'
                              ? 'bg-indigo-50 border-indigo-600 text-indigo-600'
                              : 'bg-white border-gray-300'
                          }`}
                        >
                          Modern
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Font</label>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setFontStyle('classic')}
                          className={`flex-1 px-3 py-2 text-sm rounded-lg border ${
                            fontStyle === 'classic'
                              ? 'bg-indigo-50 border-indigo-600 text-indigo-600'
                              : 'bg-white border-gray-300'
                          }`}
                        >
                          Classic
                        </button>
                        <button
                          onClick={() => setFontStyle('modern')}
                          className={`flex-1 px-3 py-2 text-sm rounded-lg border ${
                            fontStyle === 'modern'
                              ? 'bg-indigo-50 border-indigo-600 text-indigo-600'
                              : 'bg-white border-gray-300'
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
              <div>
                <button
                  onClick={() => setRecordOpen(!recordOpen)}
                  className="flex items-center justify-between w-full text-left font-medium mb-3"
                >
                  Record the invoice
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      recordOpen ? 'rotate-180' : ''
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
                      <span className="text-sm">I have received the payment</span>
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