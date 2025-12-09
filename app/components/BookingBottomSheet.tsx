"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ChevronRight, Calendar, Clock, Ticket, Wallet, CreditCard } from "lucide-react";
import { Salon, Service, Stylist } from "../data/mockData";
import Image from "next/image";
import { clsx } from "clsx";

interface BookingBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  salon: Salon;
}

const timeSlots = [
  "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00", "19:00", "20:00"
];

const paymentMethods = [
  { id: "gopay", name: "GoPay", balance: 150000, icon: Wallet },
  { id: "ovo", name: "OVO", balance: 50000, icon: Wallet },
  { id: "cash", name: "Tunai", balance: null, icon: CreditCard },
];

export default function BookingBottomSheet({ isOpen, onClose, salon }: BookingBottomSheetProps) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedStylist, setSelectedStylist] = useState<Stylist | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedPayment, setSelectedPayment] = useState(paymentMethods[0]);
  const [voucherCode, setVoucherCode] = useState("");

  const resetBooking = () => {
    setStep(1);
    setSelectedService(null);
    setSelectedStylist(null);
    setSelectedTime(null);
    setVoucherCode("");
  };

  const handleClose = () => {
    onClose();
    setTimeout(resetBooking, 300);
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const totalPrice = selectedService ? selectedService.price : 0;
  const discount = voucherCode === "TRIMLY50" ? 50000 : 0;
  const finalPrice = Math.max(0, totalPrice - discount);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* Bottom Sheet */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-gray-50 rounded-t-3xl border-t border-gray-200 max-w-[480px] mx-auto h-[90vh] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-4 bg-white border-b border-gray-100 flex justify-between items-center rounded-t-3xl">
              <div>
                <h2 className="text-lg font-bold text-gray-900">Booking Appointment</h2>
                <p className="text-xs text-gray-500">Langkah {step} dari 4</p>
              </div>
              <button onClick={handleClose} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4">
              {step === 1 && (
                <div className="space-y-3">
                  <h3 className="text-base font-semibold text-gray-900 mb-3">Pilih Layanan</h3>
                  {salon.services.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => setSelectedService(service)}
                      className={clsx(
                        "p-3 rounded-xl border cursor-pointer transition-all flex justify-between items-center shadow-sm",
                        selectedService?.id === service.id
                          ? "bg-primary/5 border-primary ring-1 ring-primary"
                          : "bg-white border-gray-100 hover:border-gray-200"
                      )}
                    >
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">{service.name}</h4>
                        <p className="text-xs text-gray-500">{service.duration}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-primary">Rp {service.price.toLocaleString()}</span>
                        {selectedService?.id === service.id && (
                          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900">Pilih Stylist</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {salon.stylists.map((stylist) => (
                      <div
                        key={stylist.id}
                        onClick={() => setSelectedStylist(stylist)}
                        className={clsx(
                          "p-4 rounded-xl border cursor-pointer transition-all flex flex-col items-center gap-3 shadow-sm relative",
                          selectedStylist?.id === stylist.id
                            ? "bg-primary/5 border-primary ring-1 ring-primary"
                            : "bg-white border-gray-100 hover:border-gray-200"
                        )}
                      >
                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100">
                          <Image src={stylist.image} alt={stylist.name} fill className="object-cover" />
                        </div>
                        <div className="text-center">
                          <h4 className="font-bold text-gray-900 text-sm">{stylist.name}</h4>
                          <p className="text-xs text-gray-500">{stylist.role}</p>
                        </div>
                        {selectedStylist?.id === stylist.id && (
                          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center absolute top-2 right-2">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900">Pilih Waktu</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={clsx(
                          "py-3 rounded-xl border text-sm font-bold transition-all shadow-sm",
                          selectedTime === time
                            ? "bg-primary text-white border-primary"
                            : "bg-white text-gray-700 border-gray-100 hover:bg-gray-50"
                        )}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900">Konfirmasi & Pembayaran</h3>
                  
                  {/* Summary Card */}
                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Layanan</span>
                      <span className="font-medium text-gray-900">{selectedService?.name}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Stylist</span>
                      <span className="font-medium text-gray-900">{selectedStylist?.name}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Waktu</span>
                      <span className="font-medium text-gray-900">{selectedTime}</span>
                    </div>
                  </div>

                  {/* Voucher Section */}
                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <Ticket className="w-5 h-5 text-secondary" />
                      <span className="font-bold text-gray-900">Voucher Hemat</span>
                    </div>
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        placeholder="Masukkan kode promo"
                        value={voucherCode}
                        onChange={(e) => setVoucherCode(e.target.value)}
                        className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary"
                      />
                      <button className="px-4 py-2 bg-gray-900 text-white text-sm font-bold rounded-lg">
                        Pakai
                      </button>
                    </div>
                    {voucherCode === "TRIMLY50" && (
                      <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                        <Check className="w-3 h-3" /> Diskon Rp 50.000 berhasil dipakai!
                      </p>
                    )}
                  </div>

                  {/* Payment Method */}
                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <Wallet className="w-5 h-5 text-primary" />
                      <span className="font-bold text-gray-900">Metode Pembayaran</span>
                    </div>
                    <div className="space-y-2">
                      {paymentMethods.map((method) => (
                        <div 
                          key={method.id}
                          onClick={() => setSelectedPayment(method)}
                          className={clsx(
                            "flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all",
                            selectedPayment.id === method.id 
                              ? "border-primary bg-primary/5" 
                              : "border-gray-100 hover:bg-gray-50"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                              <method.icon className="w-4 h-4 text-gray-600" />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-gray-900">{method.name}</p>
                              {method.balance !== null && (
                                <p className="text-xs text-gray-500">Saldo: Rp {method.balance.toLocaleString()}</p>
                              )}
                            </div>
                          </div>
                          {selectedPayment.id === method.id && (
                            <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Total */}
                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-500">Subtotal</span>
                      <span className="text-gray-900">Rp {totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-500">Diskon</span>
                      <span className="text-green-600">-Rp {discount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-100">
                      <span className="text-gray-900">Total Bayar</span>
                      <span className="text-primary">Rp {finalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-100 bg-white rounded-b-3xl">
              <div className="flex gap-3">
                {step > 1 && (
                  <button
                    onClick={prevStep}
                    className="px-6 py-3 rounded-xl border border-gray-200 text-gray-700 font-bold hover:bg-gray-50 transition-colors"
                  >
                    Kembali
                  </button>
                )}
                <button
                  onClick={step === 4 ? handleClose : nextStep}
                  disabled={
                    (step === 1 && !selectedService) ||
                    (step === 2 && !selectedStylist) ||
                    (step === 3 && !selectedTime)
                  }
                  className={clsx(
                    "flex-1 py-3 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/30",
                    (step === 1 && !selectedService) ||
                    (step === 2 && !selectedStylist) ||
                    (step === 3 && !selectedTime)
                      ? "bg-gray-300 cursor-not-allowed shadow-none"
                      : "bg-primary hover:bg-primary/90"
                  )}
                >
                  {step === 4 ? "Bayar Sekarang" : "Lanjut"}
                  {step < 4 && <ChevronRight className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
