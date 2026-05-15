'use client';
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
// import { revalidatePath } from "next/cache";

const BookingCancelAlert = ({booking}) => {
    const handleCancelBooking = async() => {
        const res = await fetch(`http://localhost:5000/booking/${booking._id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json' 
                }
            });
        const data = await res.json();
        // revalidatePath('/my-bookings')
        window.location.reload();
    }
    return (
        <div>
            <AlertDialog>
                <Button variant='outline' className={'rounded-none mt-3 text-red-500 border-red-500'}>
                    <TrashBin />
                    Cancel
                </Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-[400px]">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This will permanently delete <strong>{booking.destinationName}</strong> and all of its
                                    data. This action cannot be undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button onClick={handleCancelBooking} slot="close" variant="danger">
                                    Cancel booking permanently
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default BookingCancelAlert;