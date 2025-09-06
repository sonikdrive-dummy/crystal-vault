"use client";

import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Building2, Users } from "lucide-react";

interface BusinessOnlyModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "general" | "personal";
}

const BusinessOnlyModal = ({ isOpen, onClose, type }: BusinessOnlyModalProps) => {
  const handleBusinessSignup = () => {
    window.open("https://business.sonikdrive.com/signup", "_blank");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            {type === "general" ? (
              <Building2 className="h-6 w-6 text-primary" />
            ) : (
              <Users className="h-6 w-6 text-primary" />
            )}
          </div>
          <DialogTitle className="text-xl font-semibold text-center">
            {type === "general" ? "Currently for Business Users" : "The Cloud’s Still Warming Up for You"}
          </DialogTitle>
          <div className="text-center space-y-3 text-sm text-muted-foreground">
            {type === "general" ? (
              <>
                <div>We're currently open to business users only. <br/> If you are a business user, please proceed.</div>
                <div></div>
                {/* <div className="text-xs">
                  We are actively working to support individual users soon — thank you for your patience.
                </div> */}
              </>
            ) : (
              <>
                <div>We’re still fine-tuning the cloud for individual users.</div>
                <div className="text-xs">
                  Right now, our team’s heads-down building powerful features and scaling the cloud so your future experience is smooth, fast, and seriously awesome.
                </div>
                {/* <div className="text-xs">
                  In the meantime, if you represent a business, we'd be happy to assist you with our current offerings.
                </div> */}
              </>
            )}
          </div>
        </DialogHeader>
        <DialogFooter className="flex-col sm:flex-row gap-2">
          {type === "general" && (
            <Button onClick={handleBusinessSignup} className="w-full sm:w-auto">
              Continue as Business User
            </Button>
          )}
          <Button variant="outline" onClick={onClose} className="w-full sm:w-auto">
            {type === "general" ? "Not a Business User" : "Understood"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BusinessOnlyModal;