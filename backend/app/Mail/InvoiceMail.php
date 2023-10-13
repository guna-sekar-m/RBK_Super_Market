<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use App\Models\OrderMaster;
use App\Models\Orders;
use Illuminate\Support\Collection;
use PDF;
class InvoiceMail extends Mailable
{
    use Queueable, SerializesModels;

 /**
     * The order master instance.
     *
     * @var OrderMaster
     */
    public $orderMaster;

    /**
     * The order instance.
     *
     * @var Collection
     */
    public $orders;

    /**
     * Create a new message instance.
     *
     * @param OrderMaster $orderMaster
     * @param Collection $orders
     */
    public function __construct(OrderMaster $orderMaster, Collection  $orders)
    {
        $this->orderMaster = $orderMaster;
        $this->orders = $orders;
    }


    public function build()
    {
        // Generate the PDF invoice using a blade view
        $pdf = PDF::loadView('invoice_pdf',['orderMaster' => $this->orderMaster,'orders' => $this->orders]);

        return $this->subject('New Customer Order')
            ->view('invoice_pdf')
            ->attachData($pdf->output(), 'invoice.pdf');
    }
}
